import { useQuery } from '@tanstack/react-query'
import { useCounterStore } from '../store/useCounterStore'

// Simulated API call
const fetchInitialCount = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return 5
}

export const Counter = () => {
  const { count, increment, decrement } = useCounterStore()
  
  // Example of using React Query
  const { data: initialCount, isLoading } = useQuery({
    queryKey: ['initialCount'],
    queryFn: fetchInitialCount,
  })

  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-2xl font-bold">Counter Example</h2>
      <div className="flex items-center gap-4">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          -
        </button>
        <span className="text-xl font-semibold">{count}</span>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          +
        </button>
      </div>
      <p className="text-sm text-gray-600">
        Initial count from API: {initialCount}
      </p>
    </div>
  )
} 