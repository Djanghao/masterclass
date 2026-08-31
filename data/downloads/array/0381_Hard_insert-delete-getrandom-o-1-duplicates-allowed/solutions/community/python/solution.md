# 381: Time 92.67%, Solution with step by step explanation

**Author:** Marlen09
**Votes:** 8
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/3253045/](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/3253045/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
This is an implementation of the Randomized Collection data structure in Python, which supports the following operations:

1. insert(val: int) -> bool: Inserts a value to the collection. Returns true if the collection did not already contain the specified element.

2. remove(val: int) -> bool: Removes a value from the collection. Returns true if the collection contained the specified element.

3. getRandom() -> int: Get a random element from the collection.

The implementation uses a list to store the values and a hash map to store the indices of each value in the list. The hash map is implemented using a dictionary data structure in Python.

```
import random

class RandomizedCollection:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.vals = [] # list to store values
        self.indices = {} # hash map to store indices of each value
```
The __init__ method initializes the two data structures used by the RandomizedCollection class.

```
    def insert(self, val: int) -> bool:
        """
        Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
        """
        self.vals.append(val) # add value to end of list
        if val in self.indices: # if value already exists in hash map
            self.indices[val].add(len(self.vals)-1) # add index to set of indices
            return False
        else:
            self.indices[val] = {len(self.vals)-1} # create new set with index
            return True
```
The insert method adds a value to the end of the vals list, and if the value already exists in the indices hash map, it adds the index of the new value to the set of indices for that value. If the value does not exist in the hash map, it creates a new set with the index of the new value and adds it to the hash map. It returns true if the collection did not already contain the specified element.

```
    def remove(self, val: int) -> bool:
        """
        Removes a value from the collection. Returns true if the collection contained the specified element.
        """
        if val not in self.indices: # if value doesn't exist in hash map
            return False
        
        index = self.indices[val].pop() # get an index of the value and remove it from set
        last_val = self.vals[-1] # get the last value in list
        if index != len(self.vals)-1: # if index is not the last index
            self.vals[index] = last_val # replace value at index with last value
            self.indices[last_val].discard(len(self.vals)-1) # remove last index from set
            self.indices[last_val].add(index) # add index to set of last value
        
        self.vals.pop() # remove last value from list
        if not self.indices[val]: # if set of indices is empty
            del self.indices[val] # remove key from hash map
        
        return True
```
The remove method removes a value from the collection. If the value does not exist in the indices hash map, it returns false. Otherwise, it gets an index of the value from the set of indices for that value and removes it from the set. It also gets the last value in the vals list and replaces the value at the given index with the last value if the index is not the last index in the list. It then removes the last value from the list and removes the key from the

# Complexity
- Time complexity:
92.67%

- Space complexity:
13.13%

# Code
```
class RandomizedCollection:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.vals = [] # list to store values
        self.indices = {} # hash map to store indices of each value

    def insert(self, val: int) -> bool:
        """
        Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
        """
        self.vals.append(val) # add value to end of list
        if val in self.indices: # if value already exists in hash map
            self.indices[val].add(len(self.vals)-1) # add index to set of indices
            return False
        else:
            self.indices[val] = {len(self.vals)-1} # create new set with index
            return True

    def remove(self, val: int) -> bool:
        """
        Removes a value from the collection. Returns true if the collection contained the specified element.
        """
        if val not in self.indices: # if value doesn't exist in hash map
            return False
        
        index = self.indices[val].pop() # get an index of the value and remove it from set
        last_val = self.vals[-1] # get the last value in list
        if index != len(self.vals)-1: # if index is not the last index
            self.vals[index] = last_val # replace value at index with last value
            self.indices[last_val].discard(len(self.vals)-1) # remove last index from set
            self.indices[last_val].add(index) # add index to set of last value
        
        self.vals.pop() # remove last value from list
        if not self.indices[val]: # if set of indices is empty
            del self.indices[val] # remove key from hash map
        
        return True

    def getRandom(self) -> int:
        """
        Get a random element from the collection.
        """
        return random.choice(self.vals) # return a random value from the list

```