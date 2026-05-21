import { QueryClient } from '@tanstack/react-query'


export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

// await queryClient.prefetchQuery({ queryKey: ['products'], queryFn: fetchProducts })

