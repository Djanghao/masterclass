# [Sliding Window + MonoQueue Tutorial] LC1438

**Author:** never_get_piped
**Votes:** 30
**Link:** [https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/solutions/5354718/](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/solutions/5354718/)

---

**Topic** :  Sliding Window
Sliding Window problems are problems in which a fixed or variable-size window is moved through a data structure, typically an array or string, to solve problems efficiently based on continuous subsets of elements. This technique is used when we need to find subarrays or substrings according to a given set of conditions. (GFG Reference)

There are two types of sliding window:
- Fixed Size Sliding Window
- Dynamic Size Sliding Window

<br/>

**Topic** :  MonoQueue
The monotonic queue can be implemented using different data structures, such as a linked list, stack, or deque. The most common implementation is using a deque (double-ended queue) container. The deque container allows efficient insertion and deletion of elements from both the front and back of the queue, which is useful for implementing a monotonic queue. (GFG Reference)

There are two main types of monotonic queues:
* **Increasing Monotonic Queue**: It only keeps elements in increasing order, and any element that is smaller than the current minimum is removed.
* **Decreasing Monotonic Queue**: It only keeps elements in decreasing order, and any element that is larger than the current maximum is removed.
___

## Dynamic Size Sliding Window
A **Dynamic Size Sliding Window** refers to a window or subarray whose size is not fixed; instead, it dynamically expands or shrinks based on whether it meets specified conditions.

## Intuition Behind Dynamic Size Sliding Window
Generally, questions involving sliding window techniques often inquire about the number of subarrays or substrings that satisfy specific conditions.

By using brute force, we enumerate all subarrays or substrings and check whether each satisfies the condition. This enumeration typically results in at least `O(n^2)` time complexity.

For a fixed variable `L`, we check all subarrays `[L : R]` where `L \u2264 R`. The sliding window technique can be applied when all subarrays `[L : M]` satisfy the condition, and all subarrays with a left bound 'L' and any right bound `[M + 1 : R]` fail the condition.

Let's assume our current window has the range `[L : R]`. If the subarray `[L : R + 1]` satisfies the condition, we can continue expanding the right pointer `R` to find the maximum `M` for the current fixed `L`. If `[L : R + 1]` fails the condition, there is no need to check `[L : R + n]` because all subsequent subarrays will also fail the condition. Now it is time to expand the left pointer.

## Solution
First, it's essential to determine whether the sliding window technique is applicable. This method is suitable when:
```
For a fixed variable `L`, we check all subarrays `[L : R]` where `L \u2264 R`. The sliding window technique can be applied when all subarrays `[L : M]` satisfy the condition, and all subarrays with a left bound 'L' and any right bound `[M + 1 : R]` fail the condition.
```
This question satisfies these criteria, making it suitable for applying the sliding window technique. The sliding window meets the condition if the difference between the maximum and minimum numbers is less than or equal to the `limit`; otherwise, it fails.

We initialized a left pointer `j` and a right pointer `i`, with `i` continuously moving to the right until the condition fails. If the current window meets the condition, we update our answer and expand the right pointer; otherwise, we move the left pointer to the right.


**Now, the remaining question is how we can efficiently query the minimum and maximum numbers within a given sliding window.**

We use a **MonoQueue** as the data structure to query both the minimum and maximum values in `O(1)` time complexity. MonoQueue can be implemented using a deque or a linked list; we have chosen a linked list as the supported data structure. Unfortunately, due to limitations in standard data structure support, I will skip providing JS and PHP solution code.

We have a **Max MonoQueue**, where each element is represented as a pair consisting of a value and its corresponding index.

If our queue contains some elements sorted in descending order, and the current element is greater than the last element in our queue, we simply pop the last element because the current element provides a better choice. After all elements are popped, we add the current element to the end of our queue. 

Now, the maximum element will appear as the first element in our queue. However, since we are only interested in elements that lie within our `[j : i]` sliding window, we may need to adjust the queue by removing some outdated elements. Once we have an element that lies within the window, this becomes the maximum element for our window, and we can remove elements from the front of the queue accordingly. After removal, all remaining elements are not updated because with the above implementation, our indices are always kept sorted in ascending order for either the max or min queue.


The **Min MonoQueue** uses the same implementation principle as the **Max MonoQueue**, so we will skip it here.


<br/><br/>


```c++ []
class Solution {
public:
    void adjust(list<pair<int, int>>& mono, int left) {
        while(mono.size() > 0 && mono.front().second < left) mono.pop_front();
    }
    
    int longestSubarray(vector<int>& nums, int limit) {
        int ans = 0;
        list<pair<int, int>> monoMax, monoMin;
        for(int i = 0, j = 0; i < nums.size(); i++) {
            while(monoMax.size() > 0 && nums[i] > monoMax.back().first) {
                monoMax.pop_back();
            }
            while(monoMin.size() > 0 && nums[i] < monoMin.back().first) {
                monoMin.pop_back();
            }
            
            monoMin.push_back({nums[i], i});
            monoMax.push_back({nums[i], i});
            
            while(true) {
                adjust(monoMin, j);
                adjust(monoMax, j);
                if(monoMax.front().first - monoMin.front().first > limit) {
                    j++;
                } else {
                    break;
                }
            }
            ans = max(ans, i - j + 1);
        }
        return ans;
    }
};
```
```java []
class Solution {
    public void adjust(Deque<Pair<Integer, Integer>> mono, int left) {
        while (!mono.isEmpty() && mono.peekFirst().getValue() < left) {
            mono.pollFirst();
        }
    }
    
    public int longestSubarray(int[] nums, int limit) {
        int ans = 0;
        Deque<Pair<Integer, Integer>> monoMax = new ArrayDeque<>();
        Deque<Pair<Integer, Integer>> monoMin = new ArrayDeque<>();
        
        int j = 0;
        for (int i = 0; i < nums.length; i++) {
            while (!monoMax.isEmpty() && nums[i] > monoMax.peekLast().getKey()) {
                monoMax.pollLast();
            }
            while (!monoMin.isEmpty() && nums[i] < monoMin.peekLast().getKey()) {
                monoMin.pollLast();
            }
            
            monoMin.offerLast(new Pair<>(nums[i], i));
            monoMax.offerLast(new Pair<>(nums[i], i));
            
            while (true) {
                adjust(monoMin, j);
                adjust(monoMax, j);
                if (monoMax.peekFirst().getKey() - monoMin.peekFirst().getKey() > limit) {
                    j++;
                } else {
                    break;
                }
            }
            
            ans = Math.max(ans, i - j + 1);
        }
        
        return ans;
    }
}
```
```python []
class Solution:
    def adjust(self, mono, left):
        while mono and mono[0][1] < left:
            mono.popleft()
    
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        ans = 0
        monoMax = deque()
        monoMin = deque()
        
        j = 0
        for i in range(len(nums)):
            while monoMax and nums[i] > monoMax[-1][0]:
                monoMax.pop()
            while monoMin and nums[i] < monoMin[-1][0]:
                monoMin.pop()
            
            monoMin.append((nums[i], i))
            monoMax.append((nums[i], i))
            
            while True:
                self.adjust(monoMin, j)
                self.adjust(monoMax, j)
                if monoMax[0][0] - monoMin[0][0] > limit:
                    j += 1
                else:
                    break
            
            ans = max(ans, i - j + 1)
        
        return ans
```
```Go []
func adjust(mono *list.List, left int) {
	for mono.Len() > 0 {
		elem := mono.Front().Value.(Pair)
		if elem.Value < left {
			mono.Remove(mono.Front())
		} else {
			break
		}
	}
}

func longestSubarray(nums []int, limit int) int {
	ans := 0
	monoMax := list.New()
	monoMin := list.New()

	j := 0
	for i := 0; i < len(nums); i++ {
		for monoMax.Len() > 0 {
			back := monoMax.Back().Value.(Pair)
			if nums[i] > back.Key {
				monoMax.Remove(monoMax.Back())
			} else {
				break
			}
		}
		for monoMin.Len() > 0 {
			back := monoMin.Back().Value.(Pair)
			if nums[i] < back.Key {
				monoMin.Remove(monoMin.Back())
			} else {
				break
			}
		}

		monoMin.PushBack(Pair{nums[i], i})
		monoMax.PushBack(Pair{nums[i], i})

		for {
			adjust(monoMin, j)
			adjust(monoMax, j)
			if monoMax.Front().Value.(Pair).Key-monoMin.Front().Value.(Pair).Key > limit {
				j++
			} else {
				break
			}
		}

		ans = max(ans, i-j+1)
	}

	return ans
}

type Pair struct {
	Key   int
	Value int
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
```

**Complexity**:
* Time Complexity : `O(n)`
* Space Complexity : `O(n)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**