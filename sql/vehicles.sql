/****** Script for SelectTopNRows command from SSMS  ******/
SELECT [Id]
      ,[ContactEmail]
      ,[ContactName]
      ,[ContactPhone]
      ,[IsRegistered]
      ,[LastUpdate]
      ,[ModelId]
  FROM [patriot].[dbo].[Vehicles]

/****** Script for SelectTopNRows command from SSMS  ******/
SELECT [VehicleId]
      ,[FeatureId]
  FROM [patriot].[dbo].[VehicleFeatures]
--  where vehicleid = 13