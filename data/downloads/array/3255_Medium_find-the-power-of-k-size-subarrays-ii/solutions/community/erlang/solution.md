# Solution in all languages (except Racket)

**Author:** HitenTandon
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/solutions/5653339/](https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/solutions/5653339/)

---

```c []
int32_t* resultsArray(int32_t *nums, int32_t numsSize, int32_t k, int32_t *returnSize) {
    if(k == 1) {
        *returnSize = numsSize;
        return nums;
    }
    
    int32_t *res = (int32_t *)malloc(sizeof(int32_t) * (numsSize - k + 1));
    *returnSize = numsSize - k + 1;
    int32_t l_pos = -1;

    for(size_t i = 1; i < numsSize; ++i) {
        if(nums[i] - nums[i - 1] != 1) {
            l_pos = i;
        }

        if(i < k - 1) {
            continue;
        }

        res[i - k + 1] = (i - l_pos + 1 >= k) ? nums[i] : -1;
    }

    return res;
}
```
```C++ []
class Solution {
public:
    Solution() {
        std::cin.tie(nullptr);
        std::cout.tie(nullptr);
        std::ios::sync_with_stdio(false);
    }
    vector<int> resultsArray(vector<int> const &nums, size_t k) {
        if (k == 1) {
            return nums;
        }

        size_t last_pos = (size_t)(-1);
        vector<int> res;
        res.reserve(nums.size() - k + 1);

        for(size_t i = 1; i < nums.size(); ++i) {
            if (nums[i] - nums[i - 1] != 1) {
                last_pos = i;
            }

            if(i < k - 1) {
                continue;
            }

            if(i - last_pos + 1 >= k) {
                res.push_back(nums[i]);
            } else {
                res.push_back(-1);
            }
        }

        return res;
    }
};
```
```C# []
public class Solution {
    public int[] ResultsArray(int[] nums, int k) {
        if(k == 1) {
            return nums;
        }

        int[] res = new int[nums.Length - k + 1];
        int lPos = -1;
        for(int i = 1; i < nums.Length; ++i) {
            if(nums[i] - nums[i - 1] != 1) {
                lPos = i;
            }

            if(i < k - 1) {
                continue;
            }

            res[i - k + 1] = (i - lPos + 1 >= k) ? nums[i] : -1;
        }

        return res;
    }
}
```
```Java []
class Solution {
    public static final int[] resultsArray(final int[] nums, int k) {
        if(k == 1) {
            return nums;
        }

        int lastPos = -1;
        final int[] res = new int[nums.length - k + 1];

        for(int i = 1; i < nums.length; ++i) {
            if(nums[i] - nums[i - 1] != 1){
                lastPos = i;
            }

            if(i < k - 1) {
                continue;
            }           

            res[i - k + 1] = (i - lastPos + 1 >= k) ? nums[i] : -1;
        }   

        return res;
    }
}
```
```JS []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const resultsArray = function(nums, k) {
    if(k === 1) {
        return nums;
    }

    const res = [];
    let lPos = -1;

    for(let i = 1; i < nums.length; ++i) {
        if(nums[i] - nums[i - 1] !== 1) {
            lPos = i;
        }

        if(i < k - 1) {
            continue;
        }

        res.push(i - lPos + 1 >= k ? nums[i] : -1);
    }

    return res;
};
```
```TS []
function resultsArray(nums: number[], k: number): number[] {
    if(k === 1) {
        return nums;
    }

    let lPos = -1;
    const res = [];

    for(let i = 1; i < nums.length; ++i) {
        if(nums[i] - nums[i - 1] !== 1) {
            lPos = i;
        }

        if(i < k - 1) {
            continue;
        }

        res.push(i - lPos + 1 >= k ? nums[i] : -1);
    }

    return res;
};
```
```Py []
class Solution(object):
    def resultsArray(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        if k == 1:
            return nums
        
        res = []
        l_pos = -1

        for i in range(1, len(nums)):
            if nums[i] - nums[i - 1] != 1:
                l_pos = i

            if i < k - 1:
                continue 
            
            if i - l_pos + 1 >= k:
                res.append(nums[i])
            else:
                res.append(-1)
        
        return res
```
```Python3 []
class Solution:
    def resultsArray(self, nums: List[int], k: int) -> List[int]:
        if k == 1:
            return nums
        
        res = []
        l_pos = -1

        for i in range(1, len(nums)):
            if nums[i] - nums[i - 1] != 1:
                l_pos = i
            
            if i < k - 1:
                continue
            
            res.append(nums[i] if i - l_pos + 1 >= k else - 1)
        
        return res
```
```PHP []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer[]
     */
    function resultsArray($nums, $k) {
        if($k == 1) {
            return $nums;
        }

        $lPos = -1;
        $res = array();
        for($i = 1; $i < count($nums); ++$i) {
            if($nums[$i] - $nums[$i - 1] != 1) {
                $lPos = $i;
            }

            if($i < $k - 1) {
                continue;
            }

            array_push($res, $i - $lPos + 1 >= $k ? $nums[$i] : -1);
        }

        return $res;
    }
}
```
```Swift []
class Solution {
    func resultsArray(_ nums: [Int], _ k: Int) -> [Int] {
        if(k == 1) {
            return nums;
        }
        var res: [Int] = [];
        var lPos = -1;

        for i in 1..<nums.count {
            if(nums[i] - nums[i - 1] != 1) {
                lPos = i;
            }

            if(i < k - 1) {
                continue;
            }

            if(i - lPos + 1 >= k) {
                res.append(nums[i]);
            } else {
                res.append(-1);
            }
        }

        return res;
    }
}
```
```Kotlin []
class Solution {
    fun resultsArray(nums: IntArray, k: Int): IntArray {
        if(k == 1) {
            return nums;
        }

        var res = IntArray(nums.size - k + 1);
        var lPos = -1;

        for(i in 1..<nums.size) {
            if(nums[i] - nums[i - 1] != 1) {
                lPos = i;
            }

            if(i < k - 1) {
                continue;
            }

            if(i - lPos + 1 >= k) {
                res[i - k + 1] = nums[i];
            } else {
                res[i - k + 1] = -1;
            }
        }

        return res;
    }
}
```
---
```Dart []
class Solution {
  List<int> resultsArray(List<int> nums, int k) {
    if(k == 1) {
        return nums;
    }

    List<int> res = [];
    var lPos = -1;
    
    for(var i = 1; i < nums.length; ++i) {
        if(nums[i] - nums[i - 1] != 1) {
            lPos = i;
        }

        if(i < k - 1) {
            continue;
        }

        if(i - lPos + 1 >= k) {
            res.add(nums[i]);
        } else {
            res.add(-1);
        }
    }

    return res;
  }
}
```
```Go []
func resultsArray(nums []int, k int) []int {
    if k == 1 {
        return nums
    }

    var res []int = []int{}
    var lPos int = -1

    for i, n := range nums {
        if i == 0 {
            continue
        }

        if n - nums[i - 1] != 1 {
            lPos = i
        }

        if i < k - 1 {
            continue
        }

        if i - lPos + 1 >= k {
            res = append(res, nums[i])
        } else {
            res = append(res, -1)
        }
    }

    return res
}
```
```Ruby []
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer[]}
def results_array(nums, k)
    if (k == 1) then 
        return nums
    end

    lPos = -1
    res = []

    (1...nums.count).each do |i|
        if nums[i] - nums[i - 1] != 1 then
            lPos = i
        end

        next if i < k - 1
        res.append(if i - lPos + 1 >= k then nums[i] else -1 end)
    end

    return res
end
```
```Scala []
object Solution {
    def resultsArray(nums: Array[Int], k: Int): Array[Int] = {
        if k == 1 then 
            return nums
        var res: Array[Int] = new Array[Int](nums.length - k + 1);
        var lPos = -1;

        for i <- 1 until nums.length do {
            if nums(i) - nums(i - 1) != 1 then 
                lPos = i;

            if i >= k - 1 then{
                if i - lPos + 1 >= k then
                    res(i - k + 1) = nums(i);
                else 
                    res(i - k + 1) = -1;
            }
        }

        return res;
    }
}
```
```erlang []
-spec helper(Nums :: [integer()], LEle :: integer(), K :: integer(), Pos :: integer(), LPos :: integer()) -> [integer()].
helper(Nums, LEle, K, Pos, LPos) -> 
    case Nums of
    [] -> [];
    [X | Tail] -> 
        case (X - LEle) =/= 1 of
        true -> 
            case Pos < K - 1 of
            true -> helper(Tail, X, K, Pos + 1, Pos);
            false -> [-1 | helper(Tail, X, K, Pos + 1, Pos)]
            end;
        false -> 
            case Pos < K - 1 of 
            true -> helper(Tail, X, K, Pos + 1, LPos);
            false -> 
                case Pos - LPos + 1 >= K of 
                true -> [X | helper(Tail, X, K, Pos + 1, LPos)];
                false -> [-1 | helper(Tail, X, K, Pos + 1, LPos)]
                end
            end
        end
    end
    .
            

-spec results_array(Nums :: [integer()], K :: integer()) -> [integer()].
results_array([Head | Tail], K) ->
    case K of 
        1 -> [Head | Tail];
        L -> helper(Tail, Head, L, 1, -1)
    end
  .
```
```elixir []
defmodule Solution do
    @spec helper(nums :: [integer], lele :: integer, pos :: integer, k :: integer, last_pos :: integer) :: [integer]
    def helper([], _, _, _, _), do: []
    def helper([x | rest], lele, pos, k, last_pos) do
        if x - lele != 1 do
            if pos < k - 1 do
                helper(rest, x, pos + 1, k, pos) 
            else
                [-1 | helper(rest, x, pos + 1, k, pos)]
            end
        else
            if pos < k - 1 do
                helper(rest, x, pos + 1, k, last_pos)
            else
                if pos - last_pos + 1 >= k do
                    [x | helper(rest, x, pos + 1, k, last_pos)]
                else
                    [-1 | helper(rest, x, pos + 1, k, last_pos)]
                end
            end
        end
    end
  @spec results_array(nums :: [integer], k :: integer) :: [integer]
    def results_array([ele | tail], k) do
        if k == 1 do
            [ele | tail]
        else
            helper(tail, ele, 1, k, -1)
        end
    end
end
```