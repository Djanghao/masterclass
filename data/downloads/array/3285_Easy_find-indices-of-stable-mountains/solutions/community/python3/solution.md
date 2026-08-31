# Python3 || 4 lines, pairwise  ||

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/5786787/](https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/5786787/)

---


```python3 []
class Solution:
    def stableMountains(self, height: List[int], threshold: int) -> List[int]:

        ans = []

        for i, (prv, mtn) in enumerate(pairwise(height)):
            if prv > threshold: ans.append(i+1)

        return ans   

```
```cpp []
class Solution {
public:
    std::vector<int> stableMountains(const std::vector<int>& height, int threshold) {
        std::vector<int> ans;
        
        for (size_t i = 0; i < height.size() - 1; ++i) {
            int prv = height[i];
            if (prv > threshold) {
                ans.push_back(i + 1);
            }
        }
        
        return ans;
    }
};
```
```Java []
class Solution {
    public List<Integer> stableMountains(int[] height, int threshold) {
        List<Integer> ans = new ArrayList<>();
        
        for (int i = 0; i < height.length - 1; i++) {
            int prv = height[i];
            if (prv > threshold) {
                ans.add(i + 1);
            }
        }
        
        return ans;
    }
}
```

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(height)`.