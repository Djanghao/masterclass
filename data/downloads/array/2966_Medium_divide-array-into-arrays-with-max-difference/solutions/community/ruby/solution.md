# Sort && find condition at the same time

**Author:** ejini6969
**Votes:** 1
**Link:** [https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/solutions/5597993/](https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/solutions/5597993/)

---

# Intuition
Most (if not all) solutions utilize the built-in sorting method of their language to formulate the solution. The actual time complexity is **O(NLogN) for sorting** and **O(N / 3) for finding the satisfying condition (if any)**. Since `N` goes up to `10^5` only (`N / 3` --> `33333`), the difference in computation speed is not significantly visualized, but the same could not be said for `N` beyond `10^10`

# Approach
The approach is to sort and find matching condition **at the same time**. If the difference between any two elements in one array is less than or equal to k, we will insert the array as a sub-array into the output array, otherwise we can **exit early** as we found a non-satisfying condition.

The most optimal sorting algorithm to do this is probably **heap sort** with a time complexity of **O(NLogN)** and a space complexity of `O(1)` since we are modifying the array in-place. *Note that I had made a shallow copy of the original input (`arr`), but without it, the S.C is actually O(1)*. We will be utilizing the max-heap property to find the `n`th maximum number and when `n % 3 == 0`, we must check whether the condition is satisfied as we are only concerned with an output subarray of size 3.

For a detailed explanation of the `heapify` logic, you may refer to [this cheatsheet](https://leetcode.com/explore/learn/card/sorting/694/comparison-based-sorts/4436/). Any form of feedback and questions are utmost welcomed, HAPPY CODING !!! ^^ 

# Complexity
- Time complexity:
O(NLogN)

- Space complexity:
O(N) due to the shallow copy of original input , can be done in O(1). Note that we do not consider the output array in this scenario.

# Code

**JavaScript**
```
function heapify(arr: number[], n: number, idx: number){
    let maxi: number = idx, left: number = idx * 2 + 1, right: number = idx * 2 + 2
    if(left < n && arr[left] > arr[maxi])   maxi = left
    if(right < n && arr[right] > arr[maxi]) maxi = right
    if(maxi != idx){
        [arr[idx], arr[maxi]] = [arr[maxi], arr[idx]]
        heapify(arr, n, maxi)
    }
}

function divideArray(nums: number[], k: number): number[][] {
    let n: number = nums.length, arr: number[] = nums.slice(), ans: number[][] = []
    for(let i: number = n >> 1 - 1; i > -1; i--) heapify(arr, n, i)

    for(let i: number = n - 1; i > -1; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]]
        if(i % 3 == 0){
            if(arr[i + 2] - arr[i] > k) return []
            else                        ans.push([arr[i], arr[i + 1], arr[i + 2]])
        }
        heapify(arr, i, 0)
    }
    return ans
};
```

**Python**
```
def heapify(arr: List[int], n: int, idx: int):
    maxi, left, right = idx, idx * 2 + 1, idx * 2 + 2
    if left < n and arr[left] > arr[maxi]   : maxi = left
    if right < n and arr[right] > arr[maxi] : maxi = right
    if maxi != idx:
        arr[idx], arr[maxi] = arr[maxi], arr[idx]
        heapify(arr,n , maxi)
        
class Solution:
    def divideArray(self, nums: List[int], k: int) -> List[List[int]]:
        n, arr, ans = len(nums), nums[:], []
        for i in range(n // 2 - 1, -1, -1): heapify(arr, n, i)

        for i in range(n - 1, -1, -1):
            arr[0], arr[i] = arr[i], arr[0]
            if i % 3 == 0:
                if arr[i + 2] - arr[i] > k: return []
                else                      : ans.append([arr[i], arr[i + 1], arr[i + 2]])
            heapify(arr, i, 0)
        return ans
```

**Ruby**
```
def heapify(arr, n, idx)
  maxi, left, right = idx, idx * 2 + 1, idx * 2 + 2
  maxi = left if left < n && arr[left] > arr[maxi]
  maxi = right if right < n && arr[right] > arr[maxi]
  if maxi != idx
    arr[maxi], arr[idx] = arr[idx], arr[maxi]
    heapify(arr, n, maxi)
  end
end

def divide_array(nums, k)
    n = nums.size
    arr = nums.dup
    ans = []
    (n / 2 - 1).downto(0).each{|i| heapify(arr, n, i)}

    (n - 1).downto(0) do |i|
      arr[0], arr[i] = arr[i], arr[0]
      if i % 3 == 0
        if arr[i + 2] - arr[i] > k
          return []
        else
          ans << [arr[i], arr[i + 1], arr[i + 2]]
        end
      end
      heapify(arr, i, 0)
    end
    ans
end
```