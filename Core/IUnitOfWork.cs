using System;
using System.Threading.Tasks;

namespace patriot.Core
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();
    }
}