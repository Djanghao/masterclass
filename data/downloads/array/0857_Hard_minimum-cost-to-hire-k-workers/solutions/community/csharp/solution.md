# C# Solution for Minimum Cost To Hire K Workers Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solutions/5143927/](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solutions/5143927/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the solution is to sort the workers based on their wage to quality ratio and then iterate through them while maintaining a max heap to keep track of the highest quality workers seen so far. By selecting the top k workers with the lowest cost, we can find the minimum total cost to hire exactly k workers.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Create a Worker class to represent each worker with properties for quality, wage, and ratio.
2.	Sort the array of workers based on their wage to quality ratio.
3.	Initialize variables to track the minimum cost, total quality sum, and a max heap to store the highest quality workers.
4.	Iterate through the sorted workers:
	\u2022	Update the total quality sum and push the worker\u2019s quality onto the max heap.
	\u2022	If the size of the heap exceeds k, pop the highest quality worker from the heap and adjust the total quality sum.
	\u2022	If the size of the heap equals k, calculate the cost for the current group of workers and update the minimum cost if necessary.
5.	Return the minimum cost found.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Sorting the workers based on their ratio takes O(n log n) time. Then, iterating through the sorted workers takes O(n) time. Within each iteration, heap operations such as push and pop take O(log k) time, where k is the group size. Thus, the overall time complexity is O(n log n + n log k), which simplifies to O(n log n) since k is usually much smaller than n.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(n) for storing the workers and O(k) for the max heap. So, the overall space complexity is O(n + k).

# Code
```
public class Solution {
    public double MincostToHireWorkers(int[] quality, int[] wage, int k) {
        int n = quality.Length;
        Worker[] workers = new Worker[n];

        for (int i = 0; i < n; i++) {
            workers[i] = new Worker(quality[i], wage[i]);
        }

        Array.Sort(workers, (a, b) => a.Ratio.CompareTo(b.Ratio));

        double minCost = double.MaxValue;
        int qualitySum = 0;
        var maxHeap = new MaxHeap();

        foreach (var worker in workers) {
            qualitySum += worker.Quality;
            maxHeap.Push(worker.Quality);

            if (maxHeap.Size > k) {
                qualitySum -= maxHeap.Pop();
            }

            if (maxHeap.Size == k) {
                minCost = Math.Min(minCost, qualitySum * worker.Ratio);
            }
        }

        return minCost;
    }

    class Worker {
        public int Quality;
        public int Wage;
        public double Ratio;

        public Worker(int quality, int wage) {
            Quality = quality;
            Wage = wage;
            Ratio = (double) wage / quality;
        }
    }

    class MaxHeap {
        private int[] heap;
        public int Size { get; private set; }

        public MaxHeap() {
            heap = new int[20000];
            Size = 0;
        }

        public void Push(int value) {
            heap[++Size] = value;
            int current = Size;
            while (current > 1 && heap[current] > heap[current / 2]) {
                Swap(current, current / 2);
                current /= 2;
            }
        }

        public int Pop() {
            int top = heap[1];
            heap[1] = heap[Size--];
            int current = 1;
            while (true) {
                int leftChild = current * 2;
                int rightChild = current * 2 + 1;
                int largest = current;
                if (leftChild <= Size && heap[leftChild] > heap[largest]) {
                    largest = leftChild;
                }
                if (rightChild <= Size && heap[rightChild] > heap[largest]) {
                    largest = rightChild;
                }
                if (largest != current) {
                    Swap(current, largest);
                    current = largest;
                } else {
                    break;
                }
            }
            return top;
        }

        private void Swap(int i, int j) {
            int temp = heap[i];
            heap[i] = heap[j];
            heap[j] = temp;
        }
    }
}
```