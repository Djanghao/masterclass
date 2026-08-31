# Easy and fast code | sort method | Beginner friendly

**Author:** srajyavardhan12
**Votes:** 2
**Link:** [https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/4852118/](https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/4852118/)

---

![upvoteLeetcode.png](./images/1.png)
# Intuition
We just have to put the pack of apples in minimum no of boxes so just calculate no of apples and put them in the largest capacity box present so that we require minimum boxes


``` C++ []
class Solution {
public:
    int minimumBoxes(vector<int>& apple, vector<int>& capacity) {
        ios_base::sync_with_stdio(false);
        int noOfApples = 0;
        int minBoxes = 0;
        for(auto x : apple)
            noOfApples += x;
        
        sort(capacity.begin(),capacity.end());
        int size = capacity.size() - 1;
        for(int i = size; i >= 0; i--)
        {
            noOfApples -= capacity[i];
            minBoxes++;
            if(noOfApples <= 0)
                break;
        }
        return minBoxes;
    }
};
```

```javascript []
let noOfApples = 0;
    let minBoxes = 0;

    for (let x of apple) {
        noOfApples += x;
    }

    capacity.sort((a, b) => a - b);

    let size = capacity.length - 1;

    for (let i = size; i >= 0; i--) {
        noOfApples -= capacity[i];
        minBoxes++;

        if (noOfApples <= 0) {
            break;
        }
    }

    return minBoxes;
```
```python3 []
    class Solution:
    def minimumBoxes(self, apple: List[int], capacity: List[int]) -> int:
        noOfApples = 0
        minBoxes = 0

        for x in apple:
            noOfApples += x

        capacity.sort()
        size = len(capacity) - 1

        for i in range(size, -1, -1):
            noOfApples -= capacity[i]
            minBoxes += 1

            if noOfApples <= 0:
                break

        return minBoxes

```
```ruby []
# @param {Integer[]} apple
# @param {Integer[]} capacity
# @return {Integer}
def minimum_boxes(apple, capacity)
  no_of_apples = 0
  min_boxes = 0

  apple.each { |x| no_of_apples += x }

  capacity.sort!
  size = capacity.size - 1

  size.downto(0) do |i|
    no_of_apples -= capacity[i]
    min_boxes += 1

    break if no_of_apples <= 0
  end

  min_boxes
end


```

``` java []

public class Solution {
    public int minimumBoxes(int[] apple, int[] capacity) {
        int noOfApples = 0;
        int minBoxes = 0;

        for (int x : apple) {
            noOfApples += x;
        }

        Arrays.sort(capacity);

        int size = capacity.length - 1;

        for (int i = size; i >= 0; i--) {
            noOfApples -= capacity[i];
            minBoxes++;

            if (noOfApples <= 0) {
                break;
            }
        }

        return minBoxes;
    }
}

```


<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(nlogn)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

![upvoteLeetcode.png](./images/1.png)


