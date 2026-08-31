# 100% Efficient Iterative Approach. All LeetCode Programming Languages with comments.

**Author:** d_sushkov
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-or-of-adjacent-elements/solutions/5266089/](https://leetcode.com/problems/bitwise-or-of-adjacent-elements/solutions/5266089/)

---

# Intuition
The problem requires us to perform a bitwise OR operation on each pair of adjacent elements in an array. The bitwise OR operation will combine the bits of two numbers such that each bit in the result is 1 if either of the corresponding bits of the operands is 1.

# Approach
1. Initialization: First, determine the size of the input array and allocate memory for the output array, which will have one element less than the input array.
2. Iteration: Iterate through the input array and, for each element, compute the bitwise OR with the next element.
3. Storage: Store the result of each bitwise OR operation in the corresponding position of the output array.
4. Return: Finally, return the output array.

# Complexity
- Time complexity: O(n), where n is the number of elements in the input array. This is because we need to perform a single pass through the array to compute the bitwise OR for each pair of adjacent elements.

- Space complexity: O(n) for the input array and O(n\u22121) for the output array, which simplifies to O(n). This is because we are storing the results in a new array that has one element less than the input array.

# Code
**C++**
```
class Solution {
public:
    vector<int> orArray(vector<int>& nums) {
        // Get the length of the input array
        int n = nums.size();
        // Create an array to store the result with length one less than the input array
        std::vector<int> answer(n - 1);

        // Iterate over the input array
        for (int i = 0; i < n - 1; i++) {
            // Calculate the bitwise OR of adjacent elements and store it in the result array
            answer[i] = nums[i] | nums[i + 1];
        }
        // Return the result array
        return answer;
    }
};
```
**Java**
```
class Solution {
    public int[] orArray(int[] nums) {
        // Get the length of the input array
        int n = nums.length; 
        // Create an array to store the result with length one less than the input array
        int[] answer = new int[n - 1]; 

        // Iterate over the input array
        for (int i = 0; i < n - 1; i++) {
            // Calculate the bitwise OR of adjacent elements and store it in the result array
            answer[i] = nums[i] | nums[i + 1]; 
        }
        // Return the result array
        return answer; 
    }
}
```
**Python/Python3**
```
class Solution:
    def orArray(self, nums: List[int]) -> List[int]:
        # Get the length of the input array
        n = len(nums)
        # Create an array to store the result with length one less than the input array
        answer = [0] * (n - 1)

        # Iterate over the input array
        for i in range(n - 1):
            # Calculate the bitwise OR of adjacent elements and store it in the result array
            answer[i] = nums[i] | nums[i + 1]
    
        # Return the result array
        return answer      
```
**C**
```
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* orArray(int* nums, int numsSize, int* returnSize) {
    // Get the length of the input array
    int n = numsSize;
    // Set the size of the result array
    *returnSize = n - 1;
    // Allocate memory for the result array
    int* answer = (int*)malloc((*returnSize) * sizeof(int));

    // Iterate over the input array
    for (int i = 0; i < n - 1; i++) {
        // Calculate the bitwise OR of adjacent elements and store it in the result array
        answer[i] = nums[i] | nums[i + 1];
    }
    // Return the result array
    return answer;
}
```
**C#**
```
public class Solution {
    public int[] OrArray(int[] nums) {
        // Get the length of the input array
        int n = nums.Length;
        // Create an array to store the result with length one less than the input array
        int[] answer = new int[n - 1];

        // Iterate over the input array
        for (int i = 0; i < n - 1; i++) {
            // Calculate the bitwise OR of adjacent elements and store it in the result array
            answer[i] = nums[i] | nums[i + 1];
        }
        // Return the result array
        return answer;
    }
}
```
**JavaScript**
```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var orArray = function(nums) {
    // Get the length of the input array
    const n = nums.length;
    // Create an array to store the result with length one less than the input array
    const answer = new Array(n - 1);

    // Iterate over the input array
    for (let i = 0; i < n - 1; i++) {
        // Calculate the bitwise OR of adjacent elements and store it in the result array
        answer[i] = nums[i] | nums[i + 1];
    }
    // Return the result array
    return answer;
};
```
**TypeScript**
```
function orArray(nums: number[]): number[] {
    // Get the length of the input array
    const n = nums.length;
    // Create an array to store the result with length one less than the input array
    const answer: number[] = new Array(n - 1);

    // Iterate over the input array
    for (let i = 0; i < n - 1; i++) {
        // Calculate the bitwise OR of adjacent elements and store it in the result array
        answer[i] = nums[i] | nums[i + 1];
    }
    // Return the result array
    return answer;
};
```
**PHP**
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function orArray($nums) {
        // Get the length of the input array
        $n = count($nums);
        // Create an array to store the result with length one less than the input array
        $answer = array();

        // Iterate over the input array
        for ($i = 0; $i < $n - 1; $i++) {
            // Calculate the bitwise OR of adjacent elements and store it in the result array
            $answer[$i] = $nums[$i] | $nums[$i + 1];
        }
        // Return the result array
        return $answer;
    }
}
```
**Swift**
```
class Solution {
    func orArray(_ nums: [Int]) -> [Int] {
        // Get the length of the input array
        let n = nums.count
        // Create an array to store the result with length one less than the input array
        var answer = [Int](repeating: 0, count: n - 1)

        // Iterate over the input array
        for i in 0..<n-1 {
            // Calculate the bitwise OR of adjacent elements and store it in the result array
            answer[i] = nums[i] | nums[i + 1]
        }
        // Return the result array
        return answer
    }
}
```
**Kotlin**
```
class Solution {
    fun orArray(nums: IntArray): IntArray {
        // Get the length of the input array
        val n = nums.size
        // Create an array to store the result with length one less than the input array
        val answer = IntArray(n - 1)

        // Iterate over the input array
        for (i in 0 until n - 1) {
            // Calculate the bitwise OR of adjacent elements and store it in the result array
            answer[i] = nums[i] or nums[i + 1]
        }
        // Return the result array
        return answer
    }
}
```
**Dart**
```
class Solution {
  List<int> orArray(List<int> nums) {
     // Get the length of the input array
     int n = nums.length;
     // Create an array to store the result with length one less than the input array
     List<int> answer = List.filled(n - 1, 0);

     // Iterate over the input array
     for (int i = 0; i < n - 1; i++) {
         // Calculate the bitwise OR of adjacent elements and store it in the result array
         answer[i] = nums[i] | nums[i + 1];
     }
     // Return the result array
     return answer;
 }
}
```
**Go**
```
func orArray(nums []int) []int {
    // Get the length of the input array
    n := len(nums)
    // Create an array to store the result with length one less than the input array
    answer := make([]int, n-1)

    // Iterate over the input array
    for i := 0; i < n-1; i++ {
        // Calculate the bitwise OR of adjacent elements and store it in the result array
        answer[i] = nums[i] | nums[i+1]
    }
    // Return the result array
    return answer
}
```
**Ruby**
```
# @param {Integer[]} nums
# @return {Integer[]}
def or_array(nums)
    # Get the length of the input array
    n = nums.length
    # Create an array to store the result with length one less than the input array
    answer = Array.new(n - 1)

    # Iterate over the input array
    for i in 0...n-1 do
        # Calculate the bitwise OR of adjacent elements and store it in the result array
        answer[i] = nums[i] | nums[i + 1]
    end
    # Return the result array
    answer
end
```
**Scala**
```
object Solution {
    def orArray(nums: Array[Int]): Array[Int] = {
        // Get the length of the input array
        val n = nums.length
        // Create an array to store the result with length one less than the input array
        val answer = new Array[Int](n - 1)

        // Iterate over the input array
        for (i <- 0 until n - 1) {
            // Calculate the bitwise OR of adjacent elements and store it in the result array
            answer(i) = nums(i) | nums(i + 1)
        }
        // Return the result array
        answer
    }
}
```
**Rust**
```
impl Solution {
    pub fn or_array(nums: Vec<i32>) -> Vec<i32> {
        // Get the length of the input array
        let n = nums.len();
        // Create a vector to store the result with length one less than the input array
        let mut answer = Vec::with_capacity(n - 1);

        // Iterate over the input array
        for i in 0..n - 1 {
            // Calculate the bitwise OR of adjacent elements and store it in the result array
            answer.push(nums[i] | nums[i + 1]);
        }
        // Return the result vector
        answer
    }
}
```
**Racket**
```
(define/contract (or-array nums)
  (-> (listof exact-integer?) (listof exact-integer?))
  ;; Get the length of the input array
  (define n (length nums))
  ;; Create a list to store the result with length one less than the input array
  (define answer (make-vector (- n 1)))

  ;; Iterate over the input array
  (for ([i (in-range 0 (- n 1))])
    ;; Calculate the bitwise OR of adjacent elements and store it in the result array
    (vector-set! answer i (bitwise-ior (list-ref nums i) (list-ref nums (+ i 1)))))

  ;; Return the result array
  (vector->list answer))
```
**Erlang**
```
-spec or_array(Nums :: [integer()]) -> [integer()].
or_array(Nums) ->
    % Get the length of the input array
    N = length(Nums),
    % Create a list to store the result with length one less than the input array
    or_array(Nums, N - 1, []).

or_array([A, B | Rest], N, Acc) when N > 0 ->
    % Calculate the bitwise OR of adjacent elements and store it in the result list
    or_array([B | Rest], N - 1, Acc ++ [A bor B]);
or_array(_, _, Acc) ->
    % Return the result list
    Acc.
```
**Elixir**
```
defmodule Solution do
  @spec or_array(nums :: [integer]) :: [integer]
  def or_array(nums) do
    # Get the length of the input array
    n = length(nums)
    # Create a list to store the result with length one less than the input array
    result = for i <- 0..(n - 2), do: Bitwise.bor(Enum.at(nums, i), Enum.at(nums, i + 1))
    # Return the result list
    result
  end
end
```