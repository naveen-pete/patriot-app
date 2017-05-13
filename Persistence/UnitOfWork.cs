using System.Threading.Tasks;
using patriot.Core;

namespace patriot.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly PatriotDbContext context;
        public UnitOfWork(PatriotDbContext context)
        {
            this.context = context;
        }
        public async Task CompleteAsync()
        {
            await context.SaveChangesAsync();
        }
    }
}