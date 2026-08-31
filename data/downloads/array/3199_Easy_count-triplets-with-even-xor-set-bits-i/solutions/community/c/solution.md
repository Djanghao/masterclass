# 100% Optimized Even XOR Triplets Count in 15 programming languages

**Author:** d_sushkov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-i/solutions/5379781/](https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-i/solutions/5379781/)

---

# Intuition
The problem requires counting triplets (a[i], b[j], c[k]) such that the XOR of these elements has an even number of set bits. Given the constraints and the nature of XOR operations, we need an efficient way to determine the parity (even or odd) of the set bits in the XOR result.

# Approach
1. Count Set Bits Function: Define a function countSetBits that calculates the number of set bits in a number. This will help classify numbers into those with even and odd set bit counts.

2. Preprocessing: Create a function preprocess that takes an array and counts how many numbers have even and odd numbers of set bits using the countSetBits function.

3. Triplet Counting: Use the preprocess function to obtain counts for arrays a, b, and c. Based on these counts:

- Calculate the number of triplets where all three numbers have even set bits (evenTriplets).
- Calculate triplets where exactly two numbers have odd set bits and one has even set bits (oddOddEvenTriplets, oddEvenOddTriplets, evenOddOddTriplets).
- Sum up these counts to get the total number of valid triplets.

# Complexity
- Time complexity:
1. Count Set Bits Function (countSetBits): O(logx), where x is the maximum value in the arrays.
2. Preprocessing (preprocess): O(n) for each array (a, b, c), where 
n is the length of the array.
3. Triplet Count (tripletCount): Overall O(n) time complexity, as preprocessing and counting operations are linear with respect to the total number of elements in arrays a, b, and c.
- Combining all the above steps, the overall time complexity of the solution is dominated by the preprocessing step, which is O(n) for each of the three arrays (a, b, and c), where n is the total number of elements across all arrays.
Therefore, the overall time complexity of the solution is O(n), where 
n is the sum of the lengths of arrays a, b, and c.

- Space complexity: O(1) apart from the input arrays, since we only maintain a constant amount of space (evenCount and oddCount) during preprocessing.

# Code
**C++**
```
class Solution {
public:
    int tripletCount(vector<int>& a, vector<int>& b, vector<int>& c) {
        // Preprocess arrays to count even and odd set bits
        auto aCount = preprocess(a);
        auto bCount = preprocess(b);
        auto cCount = preprocess(c);

        // Calculate valid triplets
        int evenTriplets = aCount[0] * bCount[0] * cCount[0]; // even + even + even
        int oddOddEvenTriplets = aCount[1] * bCount[1] * cCount[0]; // odd + odd + even
        int oddEvenOddTriplets = aCount[1] * bCount[0] * cCount[1]; // odd + even + odd
        int evenOddOddTriplets = aCount[0] * bCount[1] * cCount[1]; // even + odd + odd

        // Total count of valid triplets
        return evenTriplets + oddOddEvenTriplets + oddEvenOddTriplets + evenOddOddTriplets;
    }

private:
    // Method to preprocess array and count even and odd set bits
    vector<int> preprocess(const vector<int>& arr) {
        int evenCount = 0;
        int oddCount = 0;
        // Iterate through array elements
        for (int num : arr) {
            // Count set bits and determine if even or odd
            if (__builtin_popcount(num) % 2 == 0) { // Check if number of set bits is even
                evenCount += 1; // Increment even count
            } else {
                oddCount += 1; // Increment odd count
            }
        }
        // Return counts of even and odd set bits
        return {evenCount, oddCount};
    }
}; 
```
**Java**
```
class Solution {
    public int tripletCount(int[] a, int[] b, int[] c) {
        // Preprocess arrays to count even and odd set bits
        int[] aCount = preprocess(a);
        int[] bCount = preprocess(b);
        int[] cCount = preprocess(c);

        // Calculate valid triplets
        int evenTriplets = aCount[0] * bCount[0] * cCount[0]; // even + even + even
        int oddOddEvenTriplets = aCount[1] * bCount[1] * cCount[0]; // odd + odd + even
        int oddEvenOddTriplets = aCount[1] * bCount[0] * cCount[1]; // odd + even + odd
        int evenOddOddTriplets = aCount[0] * bCount[1] * cCount[1]; // even + odd + odd

        // Total count of valid triplets
        return evenTriplets + oddOddEvenTriplets + oddEvenOddTriplets + evenOddOddTriplets;
    }

    // Method to preprocess array and count even and odd set bits
    private int[] preprocess(int[] arr) {
        int evenCount = 0;
        int oddCount = 0;
        // Iterate through array elements
        for (int num : arr) {
            // Count set bits and determine if even or odd
            if (Integer.bitCount(num) % 2 == 0) { // Check if number of set bits is even
                evenCount += 1; // Increment even count
            } else {
                oddCount += 1; // Increment odd count
            }
        }
        // Return counts of even and odd set bits
        return new int[]{evenCount, oddCount};
    }
}    
```
**Python/Python3**
```
class Solution:
    def tripletCount(self, a: List[int], b: List[int], c: List[int]) -> int:
        # Method to calculate the number of set bits
        def count_set_bits(x):
            return bin(x).count('1')
        
        # Method to preprocess array and count even and odd set bits
        def preprocess(arr):
            even_count = 0
            odd_count = 0
            # Iterate through array elements
            for num in arr:
                # Count set bits and determine if even or odd
                if count_set_bits(num) % 2 == 0:  # Check if number of set bits is even
                    even_count += 1  # Increment even count
                else:
                    odd_count += 1  # Increment odd count
            # Return counts of even and odd set bits
            return even_count, odd_count
        
        # Preprocess each array
        a_even, a_odd = preprocess(a)
        b_even, b_odd = preprocess(b)
        c_even, c_odd = preprocess(c)
        
        # Calculate valid triplets
        # Even triplets can be formed by combinations resulting in an even number of set bits
        even_triplets = a_even * b_even * c_even
        odd_odd_even_triplets = a_odd * b_odd * c_even
        odd_even_odd_triplets = a_odd * b_even * c_odd
        even_odd_odd_triplets = a_even * b_odd * c_odd
        
        # Total count of valid triplets
        return even_triplets + odd_odd_even_triplets + odd_even_odd_triplets + even_odd_odd_triplets    
```
**C**
```
#include <stdbool.h>

int tripletCount(int* a, int aSize, int* b, int bSize, int* c, int cSize) {
    int aEven, aOdd, bEven, bOdd, cEven, cOdd;
    preprocess(a, aSize, &aEven, &aOdd);
    preprocess(b, bSize, &bEven, &bOdd);
    preprocess(c, cSize, &cEven, &cOdd);

    int evenTriplets = aEven * bEven * cEven;
    int oddOddEvenTriplets = aOdd * bOdd * cEven;
    int oddEvenOddTriplets = aOdd * bEven * cOdd;
    int evenOddOddTriplets = aEven * bOdd * cOdd;

    return evenTriplets + oddOddEvenTriplets + oddEvenOddTriplets + evenOddOddTriplets;
}

int countSetBits(int x) {
    int count = 0;
    while (x > 0) {
        count += x & 1;
        x >>= 1;
    }
    return count;
}

void preprocess(int* arr, int size, int* evenCount, int* oddCount) {
    *evenCount = 0;
    *oddCount = 0;
    for (int i = 0; i < size; i++) {
        if (countSetBits(arr[i]) % 2 == 0) {
            (*evenCount)++;
        } else {
            (*oddCount)++;
        }
    }
}  
```
**C#**
```
public class Solution {
    public int TripletCount(int[] a, int[] b, int[] c) {
        // Preprocess arrays to count even and odd set bits
        int[] aCount = Preprocess(a);
        int[] bCount = Preprocess(b);
        int[] cCount = Preprocess(c);

        // Calculate valid triplets
        int evenTriplets = aCount[0] * bCount[0] * cCount[0]; // even + even + even
        int oddOddEvenTriplets = aCount[1] * bCount[1] * cCount[0]; // odd + odd + even
        int oddEvenOddTriplets = aCount[1] * bCount[0] * cCount[1]; // odd + even + odd
        int evenOddOddTriplets = aCount[0] * bCount[1] * cCount[1]; // even + odd + odd

        // Total count of valid triplets
        return evenTriplets + oddOddEvenTriplets + oddEvenOddTriplets + evenOddOddTriplets;
    }

    // Method to preprocess array and count even and odd set bits
    private int[] Preprocess(int[] arr) {
        int evenCount = 0;
        int oddCount = 0;
        // Iterate through array elements
        foreach (int num in arr) {
            // Count set bits and determine if even or odd
            if (CountSetBits(num) % 2 == 0) { // Check if number of set bits is even
                evenCount += 1; // Increment even count
            } else {
                oddCount += 1; // Increment odd count
            }
        }
        // Return counts of even and odd set bits
        return new int[]{evenCount, oddCount};
    }

    // Method to calculate the number of set bits
    private int CountSetBits(int x) {
        int count = 0;
        while (x > 0) {
            count += x & 1;
            x >>= 1;
        }
        return count;
    }
}     
```
**JavaScript**
```
/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number[]} c
 * @return {number}
 */
var tripletCount = function(a, b, c) {
    const countSetBits = (x) => {
        return x.toString(2).replace(/0/g, '').length;
    };

    const preprocess = (arr) => {
        let evenCount = 0;
        let oddCount = 0;
        arr.forEach(num => {
            if (countSetBits(num) % 2 === 0) {
                evenCount += 1;
            } else {
                oddCount += 1;
            }
        });
        return [evenCount, oddCount];
    };

    // Preprocess each array
    const aCount = preprocess(a);
    const bCount = preprocess(b);
    const cCount = preprocess(c);

    // Calculate valid triplets
    const evenTriplets = aCount[0] * bCount[0] * cCount[0]; // even + even + even
    const oddOddEvenTriplets = aCount[1] * bCount[1] * cCount[0]; // odd + odd + even
    const oddEvenOddTriplets = aCount[1] * bCount[0] * cCount[1]; // odd + even + odd
    const evenOddOddTriplets = aCount[0] * bCount[1] * cCount[1]; // even + odd + odd

    // Total count of valid triplets
    return evenTriplets + oddOddEvenTriplets + oddEvenOddTriplets + evenOddOddTriplets;
};     
```
**TypeScript**
```
function tripletCount(a: number[], b: number[], c: number[]): number {
    // Method to count set bits in a number
    const countSetBits = (x: number): number => {
        return x.toString(2).replace(/0/g, '').length;
    };

    // Method to preprocess array and count even and odd set bits
    const preprocess = (arr: number[]): [number, number] => {
        let evenCount = 0;
        let oddCount = 0;
        arr.forEach(num => {
            if (countSetBits(num) % 2 === 0) {
                evenCount += 1;
            } else {
                oddCount += 1;
            }
        });
        return [evenCount, oddCount];
    };

    // Preprocess each array
    const aCount = preprocess(a);
    const bCount = preprocess(b);
    const cCount = preprocess(c);

    // Calculate valid triplets
    const evenTriplets = aCount[0] * bCount[0] * cCount[0]; // even + even + even
    const oddOddEvenTriplets = aCount[1] * bCount[1] * cCount[0]; // odd + odd + even
    const oddEvenOddTriplets = aCount[1] * bCount[0] * cCount[1]; // odd + even + odd
    const evenOddOddTriplets = aCount[0] * bCount[1] * cCount[1]; // even + odd + odd

    // Total count of valid triplets
    return evenTriplets + oddOddEvenTriplets + oddEvenOddTriplets + evenOddOddTriplets;
};    
```
**Swift**
```
class Solution {
    func tripletCount(_ a: [Int], _ b: [Int], _ c: [Int]) -> Int {
        // Method to count set bits in a number
        func countSetBits(_ x: Int) -> Int {
            return String(x, radix: 2).filter { $0 == "1" }.count
        }
        
        // Method to preprocess array and count even and odd set bits
        func preprocess(_ arr: [Int]) -> (Int, Int) {
            var evenCount = 0
            var oddCount = 0
            for num in arr {
                if countSetBits(num) % 2 == 0 {
                    evenCount += 1
                } else {
                    oddCount += 1
                }
            }
            return (evenCount, oddCount)
        }
        
        // Preprocess each array
        let (aEven, aOdd) = preprocess(a)
        let (bEven, bOdd) = preprocess(b)
        let (cEven, cOdd) = preprocess(c)
        
        // Calculate valid triplets
        let evenTriplets = aEven * bEven * cEven // even + even + even
        let oddOddEvenTriplets = aOdd * bOdd * cEven // odd + odd + even
        let oddEvenOddTriplets = aOdd * bEven * cOdd // odd + even + odd
        let evenOddOddTriplets = aEven * bOdd * cOdd // even + odd + odd
        
        // Total count of valid triplets
        return evenTriplets + oddOddEvenTriplets + oddEvenOddTriplets + evenOddOddTriplets
    }
}   
```
**Kotlin**
```
class Solution {
    fun tripletCount(a: IntArray, b: IntArray, c: IntArray): Int {
        // Method to count set bits in a number
        fun countSetBits(x: Int): Int {
            return Integer.bitCount(x)
        }

        // Method to preprocess array and count even and odd set bits
        fun preprocess(arr: IntArray): Pair<Int, Int> {
            var evenCount = 0
            var oddCount = 0
            for (num in arr) {
                if (countSetBits(num) % 2 == 0) {
                    evenCount++
                } else {
                    oddCount++
                }
            }
            return Pair(evenCount, oddCount)
        }

        // Preprocess each array
        val (aEven, aOdd) = preprocess(a)
        val (bEven, bOdd) = preprocess(b)
        val (cEven, cOdd) = preprocess(c)

        // Calculate valid triplets
        val evenTriplets = aEven * bEven * cEven // even + even + even
        val oddOddEvenTriplets = aOdd * bOdd * cEven // odd + odd + even
        val oddEvenOddTriplets = aOdd * bEven * cOdd // odd + even + odd
        val evenOddOddTriplets = aEven * bOdd * cOdd // even + odd + odd

        // Total count of valid triplets
        return evenTriplets + oddOddEvenTriplets + oddEvenOddTriplets + evenOddOddTriplets
    }
}     
```
**Dart**
```
class Solution {
  int tripletCount(List<int> a, List<int> b, List<int> c) {
    // Method to count set bits in a number
    int countSetBits(int x) {
      return x.toRadixString(2).replaceAll('0', '').length;
    }

    // Method to preprocess array and count even and odd set bits
    List<int> preprocess(List<int> arr) {
      int evenCount = 0;
      int oddCount = 0;
      for (int num in arr) {
        if (countSetBits(num) % 2 == 0) {
          evenCount += 1;
        } else {
          oddCount += 1;
        }
      }
      return [evenCount, oddCount];
    }

    // Preprocess each array
    List<int> aCount = preprocess(a);
    List<int> bCount = preprocess(b);
    List<int> cCount = preprocess(c);

    // Calculate valid triplets
    int evenTriplets = aCount[0] * bCount[0] * cCount[0]; // even + even + even
    int oddOddEvenTriplets = aCount[1] * bCount[1] * cCount[0]; // odd + odd + even
    int oddEvenOddTriplets = aCount[1] * bCount[0] * cCount[1]; // odd + even + odd
    int evenOddOddTriplets = aCount[0] * bCount[1] * cCount[1]; // even + odd + odd

    // Total count of valid triplets
    return evenTriplets + oddOddEvenTriplets + oddEvenOddTriplets + evenOddOddTriplets;
  }
}     
```
**Go**
```
func tripletCount(a []int, b []int, c []int) int {
    aEven, aOdd := preprocess(a)
    bEven, bOdd := preprocess(b)
    cEven, cOdd := preprocess(c)

    evenTriplets := aEven * bEven * cEven
    oddOddEvenTriplets := aOdd * bOdd * cEven
    oddEvenOddTriplets := aOdd * bEven * cOdd
    evenOddOddTriplets := aEven * bOdd * cOdd

    return evenTriplets + oddOddEvenTriplets + oddEvenOddTriplets + evenOddOddTriplets
}
func countSetBits(x int) int {
    count := 0
    for x > 0 {
        count += x & 1
        x >>= 1
    }
    return count
}

func preprocess(arr []int) (int, int) {
    evenCount := 0
    oddCount := 0
    for _, num := range arr {
        if countSetBits(num) % 2 == 0 {
            evenCount++
        } else {
            oddCount++
        }
    }
    return evenCount, oddCount
}
    
```
**Ruby**
```
# @param {Integer[]} a
# @param {Integer[]} b
# @param {Integer[]} c
# @return {Integer}
def triplet_count(a, b, c)
  # Method to count set bits in a number
  def count_set_bits(x)
    x.to_s(2).count('1')
  end

  # Method to preprocess array and count even and odd set bits
  def preprocess(arr)
    even_count = 0
    odd_count = 0
    arr.each do |num|
      if count_set_bits(num) % 2 == 0
        even_count += 1
      else
        odd_count += 1
      end
    end
    [even_count, odd_count]
  end

  # Preprocess each array
  a_even, a_odd = preprocess(a)
  b_even, b_odd = preprocess(b)
  c_even, c_odd = preprocess(c)

  # Calculate valid triplets
  even_triplets = a_even * b_even * c_even
  odd_odd_even_triplets = a_odd * b_odd * c_even
  odd_even_odd_triplets = a_odd * b_even * c_odd
  even_odd_odd_triplets = a_even * b_odd * c_odd

  # Total count of valid triplets
  even_triplets + odd_odd_even_triplets + odd_even_odd_triplets + even_odd_odd_triplets
end   
```
**Scala**
```
object Solution {
    def tripletCount(a: Array[Int], b: Array[Int], c: Array[Int]): Int = {
        // Method to count set bits in a number
        def countSetBits(x: Int): Int = {
            Integer.bitCount(x)
        }

        // Method to preprocess array and count even and odd set bits
        def preprocess(arr: Array[Int]): (Int, Int) = {
            var evenCount = 0
            var oddCount = 0
            for (num <- arr) {
                if (countSetBits(num) % 2 == 0) {
                    evenCount += 1
                } else {
                    oddCount += 1
                }
            }
            (evenCount, oddCount)
        }

        // Preprocess each array
        val (aEven, aOdd) = preprocess(a)
        val (bEven, bOdd) = preprocess(b)
        val (cEven, cOdd) = preprocess(c)

        // Calculate valid triplets
        val evenTriplets = aEven * bEven * cEven
        val oddOddEvenTriplets = aOdd * bOdd * cEven
        val oddEvenOddTriplets = aOdd * bEven * cOdd
        val evenOddOddTriplets = aEven * bOdd * cOdd

        // Total count of valid triplets
        evenTriplets + oddOddEvenTriplets + oddEvenOddTriplets + evenOddOddTriplets
    }
}   
```
**Rust**
```
impl Solution {
    pub fn triplet_count(a: Vec<i32>, b: Vec<i32>, c: Vec<i32>) -> i32 {
        // Method to count set bits in a number
        fn count_set_bits(x: i32) -> i32 {
            x.count_ones() as i32
        }

        // Method to preprocess array and count even and odd set bits
        fn preprocess(arr: Vec<i32>) -> (i32, i32) {
            let mut even_count = 0;
            let mut odd_count = 0;
            for num in arr {
                if count_set_bits(num) % 2 == 0 {
                    even_count += 1;
                } else {
                    odd_count += 1;
                }
            }
            (even_count, odd_count)
        }

        // Preprocess each array
        let (a_even, a_odd) = preprocess(a);
        let (b_even, b_odd) = preprocess(b);
        let (c_even, c_odd) = preprocess(c);

        // Calculate valid triplets
        let even_triplets = a_even * b_even * c_even;
        let odd_odd_even_triplets = a_odd * b_odd * c_even;
        let odd_even_odd_triplets = a_odd * b_even * c_odd;
        let even_odd_odd_triplets = a_even * b_odd * c_odd;

        // Total count of valid triplets
        even_triplets + odd_odd_even_triplets + odd_even_odd_triplets + even_odd_odd_triplets
    }
}    
```
**Elixir**
```
defmodule Solution do
  @spec triplet_count(a :: [integer], b :: [integer], c :: [integer]) :: integer
  def triplet_count(a, b, c) do
    # Method to count set bits in a number
    count_set_bits = fn x ->
      Integer.to_string(x, 2) |> String.graphemes() |> Enum.count(&(&1 == "1"))
    end

    # Method to preprocess array and count even and odd set bits
    preprocess = fn arr ->
      Enum.reduce(arr, {0, 0}, fn num, {even_count, odd_count} ->
        if rem(count_set_bits.(num), 2) == 0 do
          {even_count + 1, odd_count}
        else
          {even_count, odd_count + 1}
        end
      end)
    end

    # Preprocess each array
    {a_even, a_odd} = preprocess.(a)
    {b_even, b_odd} = preprocess.(b)
    {c_even, c_odd} = preprocess.(c)

    # Calculate valid triplets
    even_triplets = a_even * b_even * c_even
    odd_odd_even_triplets = a_odd * b_odd * c_even
    odd_even_odd_triplets = a_odd * b_even * c_odd
    even_odd_odd_triplets = a_even * b_odd * c_odd

    # Total count of valid triplets
    even_triplets + odd_odd_even_triplets + odd_even_odd_triplets + even_odd_odd_triplets
  end
end     
```