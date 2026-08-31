# C++ | Iterators | Caching | 0ms, Beats 100% | Explanation

**Author:** akash2099
**Votes:** 100
**Link:** [https://leetcode.com/problems/peeking-iterator/solutions/1055887/](https://leetcode.com/problems/peeking-iterator/solutions/1055887/)

---

**EXPLANATION**
- First define **private variables** as follows:
	- ```next_val``` : to store the **next value of the Iterator**
	- ```iter_hasnext``` : to store the **hasNext value of the Iterator**
```
int next_val; // keep a variable for storing the "next value" for use in "peek" function
bool iter_hasnext; // for storing the "has next value"
```
- In **PeekingIterator** constructor, store the **current Iterator has next value in ```has_next```** and the **current iterator next value in ```next_val```**, which will be used in ```hasNext()``` and ```peek()``` respectively.
```
PeekingIterator(const vector<int>& nums) : Iterator(nums) {
	iter_hasnext=Iterator::hasNext(); // store current has_next value
	if (iter_hasnext)
		next_val = Iterator::next(); // store the "next_val" for "future" use in "peek" function
}
```
- For **peek()** function, return the **current stored ```next_val```**. *(cached previously in other functions)*
```
int peek() {
	return next_val; // return current next_val
}
```
- For **next()** function, return the **```value of next_val```** and also **cache the next possible value of Iterator** in ```next_val```. Also **update** the ```iter_hasnext``` variable for using in ```hasNext()``` function.
```
int next() {
	int curr_next = next_val; // store the current next for returning

	iter_hasnext=Iterator::hasNext(); // change the iter_hasnext variable
	if (iter_hasnext) 
		next_val = Iterator::next(); // change the next_val and move the iterator to next position

	return curr_next; // return the previously stored current next
}
```
- For **hasNext()** function, return the **current value of ```iter_hasnext```**.
```
bool hasNext() const {
	return iter_hasnext; // return current iter_hashnext value
}
```
 
 
**COMPLETE CODE**
```
class PeekingIterator : public Iterator {
    int next_val; // keep a variable for storing the "next value" for use in "peek" function
    bool iter_hasnext; // for storing the "has next value"
public:
	PeekingIterator(const vector<int>& nums) : Iterator(nums) {
        iter_hasnext=Iterator::hasNext(); // store current has_next value
	    if (iter_hasnext)
            next_val = Iterator::next(); // store the "next_val" for "future" use in "peek" function
	}
	
	int peek() {
        return next_val; // return current next_val
	}
	
	int next() {
	    int curr_next = next_val; // store the current next for returning
        
        iter_hasnext=Iterator::hasNext(); // change the iter_hasnext variable
	    if (iter_hasnext) 
            next_val = Iterator::next(); // change the next_val and move the iterator to next position
        
	    return curr_next; // return the previously stored current next
	}
	
	bool hasNext() const {
	    return iter_hasnext; // return current iter_hashnext value
	}
};
```


**TIME COMPLEXITY**
**peek(): O(1)**
**next() : O(1)**
**hasNext() : O(1)**

**SPACE COMPLEXITY**
**O(1)**