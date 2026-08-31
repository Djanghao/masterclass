# ✅97.87%🔥python3/C/C#/C++/Java🔥Randomized Index Selection for Target Values in an Array🔥

**Author:** MrAke
**Votes:** 69
**Link:** [https://leetcode.com/problems/random-pick-index/solutions/4042503/](https://leetcode.com/problems/random-pick-index/solutions/4042503/)

---

![Screenshot 2023-08-20 065922.png](./images/0.png)


```Python3 []
class Solution:

    def __init__(self, nums: List[int]):
        self.indices = defaultdict(list)
        for i, num in enumerate(nums):
            self.indices[num].append(i)

    def pick(self, target: int) -> int:
        return random.choice(self.indices[target])

```
```Python []
class Solution:

    def __init__(self, nums: List[int]):
        self.indices = defaultdict(list)
        for i, num in enumerate(nums):
            self.indices[num].append(i)

    def pick(self, target: int) -> int:
        return random.choice(self.indices[target])

```
```C# []
public class Solution
{
    private Dictionary<int, List<int>> indices;

    public Solution(int[] nums)
    {
        indices = new Dictionary<int, List<int>>();
        for (int i = 0; i < nums.Length; i++)
        {
            if (!indices.ContainsKey(nums[i]))
            {
                indices[nums[i]] = new List<int>();
            }
            indices[nums[i]].Add(i);
        }
    }

    public int Pick(int target)
    {
        Random random = new Random();
        List<int> targetIndices = indices.ContainsKey(target) ? indices[target] : new List<int>();
        
        int randomIndex = random.Next(0, targetIndices.Count);
        
        return targetIndices[randomIndex];
    }
}
```
```C []
typedef struct {
    int* nums;
    int numsSize;
} Solution;

Solution* solutionCreate(int* nums, int numsSize) {
    Solution* obj = (Solution*)malloc(sizeof(Solution));
    obj->nums = (int*)malloc(numsSize * sizeof(int));
    obj->numsSize = numsSize;
    
    for (int i = 0; i < numsSize; i++) {
        obj->nums[i] = nums[i];
    }
    
    return obj;
}

int solutionPick(Solution* obj, int target) {
    int count = 0;
    int result = -1;
    
    for (int i = 0; i < obj->numsSize; i++) {
        if (obj->nums[i] == target) {
            count++;
            if (rand() % count == 0) {
                result = i;
            }
        }
    }
    
    return result;
}

void solutionFree(Solution* obj) {
    free(obj->nums);
    free(obj);
}
```
```C++ []
class Solution {
private:
    std::unordered_map<int, std::vector<int>> indices;

public:
    Solution(std::vector<int>& nums) {
        for (int i = 0; i < nums.size(); ++i) {
            indices[nums[i]].push_back(i);
        }
    }

    int pick(int target) {
        std::random_device rd;
        std::mt19937 gen(rd());

        if (indices.find(target) != indices.end()) {
            std::vector<int>& targetIndices = indices[target];
            std::uniform_int_distribution<int> dist(0, targetIndices.size() - 1);
            int randomIndex = dist(gen);
            return targetIndices[randomIndex];
        }

        return -1;
    }
};
```
```Java []
public class Solution {
    private Map<Integer, List<Integer>> indices = new HashMap<>();

    public Solution(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            if (!indices.containsKey(nums[i])) {
                indices.put(nums[i], new ArrayList<>());
            }
            indices.get(nums[i]).add(i);
        }
    }

    public int pick(int target) {
        Random random = new Random();

        if (indices.containsKey(target)) {
            List<Integer> targetIndices = indices.get(target);
            int randomIndex = random.nextInt(targetIndices.size());
            return targetIndices.get(randomIndex);
        }

        return -1;
    }
}
```
