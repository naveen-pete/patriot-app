using AutoMapper;
using System.Linq;
using patriot.Controllers.Resources;
using patriot.Core.Models;
using System.Collections.Generic;

namespace patriot.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Domain to API Resource
            CreateMap(typeof(QueryResult<>), typeof(QueryResultResource<>));
            CreateMap<Make, MakeResource>();
            CreateMap<Make, KeyValuePairResource>();
            CreateMap<Model, KeyValuePairResource>();
            CreateMap<Feature, KeyValuePairResource>();
            CreateMap<Vehicle, SaveVehicleResource>()
                .ForMember(svr => svr.Contact, opt => opt.MapFrom(
                    v => new ContactResource { 
                        Name = v.ContactName,
                        Email = v.ContactEmail,
                        Phone = v.ContactPhone
                    }
                ))
                .ForMember(svr => svr.Features, opt => opt.MapFrom(
                    v => v.Features.Select(vf => vf.FeatureId)
                ));
            CreateMap<Vehicle, VehicleResource>()
                .ForMember(vr => vr.Make, opt => opt.MapFrom(v => v.Model.Make))
                .ForMember(vr => vr.Contact, opt => opt.MapFrom(
                    v => new ContactResource { 
                        Name = v.ContactName,
                        Email = v.ContactEmail,
                        Phone = v.ContactPhone
                    }
                ))
                .ForMember(vr => vr.Features, opt => opt.MapFrom(
                    v => v.Features
                            .Select(vf => new KeyValuePairResource { 
                                Id = vf.Feature.Id,
                                Name = vf.Feature.Name 
                            })
                ));

            // API Resource to Domain
            CreateMap<VehicleQueryResource, VehicleQuery>();
            CreateMap<SaveVehicleResource, Vehicle>()
                .ForMember(v => v.Id, opt => opt.Ignore())
                .ForMember(v => v.ContactName, opt => opt.MapFrom(svr => svr.Contact.Name))
                .ForMember(v => v.ContactEmail, opt => opt.MapFrom(svr => svr.Contact.Email))
                .ForMember(v => v.ContactPhone, opt => opt.MapFrom(svr => svr.Contact.Phone))
                .ForMember(v => v.Features, opt => opt.Ignore())
                .AfterMap((svr, v) => {
                    // Remove unselected features

                    // Without Linq
                    // var removedFeatures = new List<VehicleFeature>();
                    // foreach(var f in v.Features)
                    //     if(!vr.Features.Contains(f.FeatureId))
                    //         removedFeatures.Add(f);

                    // Using Linq
                    var removedFeatures = v.Features
                        .Where(f => !svr.Features.Contains(f.FeatureId))
                        .ToList();

                    foreach(var f in removedFeatures)
                        v.Features.Remove(f);
                    
                    // Add new features

                    // Without Linq
                    // foreach(var id in vr.Features)
                    //     if(!v.Features.Any(f => f.FeatureId == id))
                    //         v.Features.Add(new VehicleFeature { FeatureId = id });

                    // Using Linq
                    var addedFeatures = svr.Features
                        .Where(id => !v.Features.Any(f => f.FeatureId == id))
                        .Select(id => new VehicleFeature { FeatureId = id })
                        .ToList();

                    foreach(var f in addedFeatures)
                        v.Features.Add(f);
                });

        }
    }
}