import { QueryClient } from '@tanstack/react-query'


export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 100,
    },
  },
})

// await queryClient.prefetchQuery({ queryKey: ['products'], queryFn: fetchProducts })

