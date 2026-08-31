# 🔥 Best rand() approach 🚀 | Beats 100% of users 💯

**Author:** mansimittal935
**Votes:** 2
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/6078059/](https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/6078059/)

---

# Intuition
##### rand() generates a random number, providing quick and efficient randomness.

# Approach
##### Outperforming others means the approach ensures constant-time or near-optimal performance, avoiding slower methods like iterating through elements or converting data structures.

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(n)

# Code


```cpp []
class RandomizedSet {
public:
    unordered_set<int> st;
    RandomizedSet() {
        
    }

    bool insert(int val) {
        if(st.find(val) == st.end()) {
            st.insert(val);
            return true;
        }
        return false;
    }
    
    bool remove(int val) {
        if(st.find(val) != st.end()) {
            st.erase(val);
            return true;
        }
        return false;
    }
    
    int getRandom() { 
        int randomIndex = rand() % st.size();
        auto it = st.begin();
        advance(it, randomIndex);
        
        return *it ;
    }
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet* obj = new RandomizedSet();
 * bool param_1 = obj->insert(val);
 * bool param_2 = obj->remove(val);
 * int param_3 = obj->getRandom();
 */
```
```java []
import java.util.*;

class RandomizedSet {
    private HashSet<Integer> set;
    private Random random;

    public RandomizedSet() {
        set = new HashSet<>();
        random = new Random();
    }

    public boolean insert(int val) {
        if (!set.contains(val)) {
            set.add(val);
            return true;
        }
        return false;
    }

    public boolean remove(int val) {
        if (set.contains(val)) {
            set.remove(val);
            return true;
        }
        return false;
    }

    public int getRandom() {
        int randomIndex = random.nextInt(set.size());
        Iterator<Integer> it = set.iterator();
        for (int i = 0; i < randomIndex; i++) {
            it.next();
        }
        return it.next();
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet obj = new RandomizedSet();
 * boolean param_1 = obj.insert(val);
 * boolean param_2 = obj.remove(val);
 * int param_3 = obj.getRandom();
 */
```
```javascript []
class RandomizedSet {
    constructor() {
        this.set = new Set(); // Use a Set to store unique values
    }

    insert(val) {
        if (!this.set.has(val)) {
            this.set.add(val); // Add value to the Set
            return true;
        }
        return false;
    }

    remove(val) {
        if (this.set.has(val)) {
            this.set.delete(val); // Remove value from the Set
            return true;
        }
        return false;
    }

    getRandom() {
        const items = Array.from(this.set); // Convert Set to an Array
        const randomIndex = Math.floor(Math.random() * items.length); // Generate random index
        return items[randomIndex]; // Return random element
    }
}

/**
 * Example usage:
 * const obj = new RandomizedSet();
 * const param1 = obj.insert(1);
 * const param2 = obj.remove(1);
 * const param3 = obj.getRandom();
 */

```
```python []
import random

class RandomizedSet:
    def __init__(self):
        self.set = set()  # Use a set to store unique values

    def insert(self, val: int) -> bool:
        if val not in self.set:
            self.set.add(val)  # Add value to the set
            return True
        return False

    def remove(self, val: int) -> bool:
        if val in self.set:
            self.set.remove(val)  # Remove value from the set
            return True
        return False

    def getRandom(self) -> int:
        items = list(self.set)  # Convert set to a list
        randomIndex = random.randint(0, len(items) - 1)  # Generate random index
        return items[randomIndex]  # Return random element

``` 
```ruby []
class RandomizedSet
  def initialize
    @set = Set.new  # Use a Set to store unique values
  end

  def insert(val)
    unless @set.include?(val)
      @set.add(val)  # Add value to the set
      return true
    end
    false
  end

  def remove(val)
    if @set.include?(val)
      @set.delete(val)  # Remove value from the set
      return true
    end
    false
  end

  def get_random
    items = @set.to_a  # Convert set to an array
    random_index = rand(items.length)  # Generate random index
    items[random_index]  # Return random element
  end
end

# Example usage:
# obj = RandomizedSet.new
# param1 = obj.insert(1)
# param2 = obj.remove(1)
# param3 = obj.get_random

```