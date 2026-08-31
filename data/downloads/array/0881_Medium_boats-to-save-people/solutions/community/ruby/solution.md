# Easy beginner friendly solution || ✅✅✅

**Author:** Vibhor_Sharma_7
**Votes:** 1
**Link:** [https://leetcode.com/problems/boats-to-save-people/solutions/5111964/](https://leetcode.com/problems/boats-to-save-people/solutions/5111964/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this approach is to sort people by weight and greedily pair the heaviest and lightest individuals who can fit into a boat together. By iteratively pairing individuals optimally, we minimize the number of boats needed while efficiently utilizing the available space in each boat, ultimately ensuring a more effective rescue operation.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Sort the People by Weight: The first step sorts the array of people by their weights. Sorting enables a greedy approach, allowing us to pair the heaviest and lightest individuals who can fit into a boat together.
1. Initialize Pointers: We initialize two pointers, left and right, pointing to the beginning and end of the sorted array respectively.
Initialize Boat Count: We initialize a variable boats to count the number of boats needed.
1. Greedy Pairing: We iterate through the array from both ends (using left and right pointers) towards the middle. At each step:
If the sum of weights of the person at left and right pointers is less than or equal to the limit, it means they can fit into a boat together. We increment left to consider the next lightest person, as we're trying to pair the heaviest and lightest individuals.
1. Regardless of whether a pair can be formed or not, we increment the boat count, as either one person can fit in a boat (if no pair is formed) or both can fit (if a pair is formed).
We also decrement right to consider the next heaviest person.
1. Termination: The loop continues until left exceeds right, indicating that we've processed all individuals in the sorted array.
1. Return Boat Count: Finally, we return the total number of boats needed.


---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(nlogn)$$
Sorting the array takes O(n log n) time, where n is the number of people. The greedy pairing process then takes O(n) time. So, overall time complexity is O(n log n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
The sorting operation typically requires O(n) extra space for the array of people. Other variables (left, right, boats) are constants. So, the space complexity is O(n).

# Code
```C++ []
class Solution {
public:
    int numRescueBoats(vector<int>& people, int limit) {
        sort(people.begin(),people.end());
        int left = 0;
        int right = people.size()-1;
        int boats = 0;
        while(left <= right){
            if(people[left]+people[right] <= limit){
                left++;
            }
            boats++;
            right--;
        }
        return boats;
    }
};
```
```Java []
class Solution {
    public int numRescueBoats(int[] people, int limit) {
        Arrays.sort(people);
        int left = 0, right = people.length-1;
        int boats = 0;
        while(left <= right){
            if(people[left]+people[right] <= limit){
                left++;
            }
            boats++;
            right--;
        }
        return boats;
    }
}
```
```python []
class Solution(object):
    def numRescueBoats(self, people, limit):
        """
        :type people: List[int]
        :type limit: int
        :rtype: int
        """
        people.sort()
        left = 0
        right = len(people)-1
        boats = 0
        while left <= right:
            if people[left]+people[right] <= limit:
                boats += 1
                left += 1
                right -= 1
            else:
                boats += 1
                right -= 1
        return boats
        
```
```ruby []
# @param {Integer[]} people
# @param {Integer} limit
# @return {Integer}
def num_rescue_boats(people, limit)
    people.sort!
    left = 0
    right = people.length()-1
    boats = 0
    while left <= right
        if people[left]+people[right] <= limit
            left += 1
        end
        boats += 1
        right -= 1
    end
    return boats
end
```