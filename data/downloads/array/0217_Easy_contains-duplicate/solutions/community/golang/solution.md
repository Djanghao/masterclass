# [Go] Multiple Solutions in Go (GoLang)

**Author:** krex0r
**Votes:** 62
**Link:** [https://leetcode.com/problems/contains-duplicate/solutions/2552285/](https://leetcode.com/problems/contains-duplicate/solutions/2552285/)

---

Hello gophers!

# Problem: 217. Contains Duplicate (Easy)

## Solutions

From worst to best solutions!

| Solution #       | Solution Name                                 | Time Complexity | Space Complexity |
|------------------|------------------------------------------------|-----------------|------------------|
| Solution 1 (Worst)       | Brute Force                                    | `O(n^2)`        | `O(1)`           |
| Solution 2       | Sorting                                        | `O(nlogn)`      | `O(logn)`           |
| Solution 3       | Using a `multiset`                             | `O(n)`          | `O(n)`           |
| Solution 4       | Another `multiset` solution                    | `O(n)`          | `O(n)`           |
| Solution 5 (Clean)       | Using a `set` with custom data structure       | `O(n)`          | `O(n)`           |
| Solution 6 (Interview)       | Using a `set` for interviews (No custom struct)| `O(n)`          | `O(n)`           |


### Solution1: Brute Force

We check every possible pairs! \uD83D\uDC80

Time: `O(n^2)`
Space: `O(1)`

```go
// Time: O(n*n) = O(n^2)
// Space: O(1)
func containsDuplicate(nums []int) bool {
    // Time: O(n-1) = O(n)
    for i := 0; i < len(nums)-1; i++ {
        // Time: O(n-1) = O(n)
        for j := i+1; j < len(nums); j++ {
            if nums[i] == nums[j] {
                return true
            }
        }
    }
    return false
}
```

### Solution 2: Sorting

We sort all nums and we check the pairs that are beside each others!

Time: `O(nlogn)`
Space: `O(logn)` (see `sort` pkg doc)

```go
// Time: O(nlogn + n) = O(nlogn)
// Space: O(logn)
func containsDuplicate(nums []int) bool {
    if len(nums) <= 1 {
        return false
    }
    
    // Time: O(nlogn)
    // Space: O(logn)
    sort.Ints(nums)
    
    // Time: O(n)
    for i := 0; i < len(nums)-1; i++ {
        if nums[i] == nums[i+1] {
            return true
        }
    }
    
    return false
}
```

### Solution 3: Using a `multiset`

We create a `multiset` (`map[num]occurence` where both `num` and `occurence` are `int`s).  
When the `multiset` is created, we checked if one of the `num` has more than one `occurence`.

Time: `O(n)`
Space: `O(n)`

```go
// Time: O(n+n) = O(2n) = O(n)
// Space: O(n)
func containsDuplicate(nums []int) bool {
    // Space: O(n)
    set := NewMultiSet()
    
    // Time: O(n)
    set.AddNums(nums)
    
    // Time: O(n)
    for _, num := range nums {
        // Time: O(1)
        if set.HasDuplicate(num) {
            return true
        }
    }
    
    return false
}

type MultiSet struct {
    items map[int]int
}

func NewMultiSet() *MultiSet {
    return &MultiSet{
        items: make(map[int]int),
    }
}

// Time: O(n)
// Space: O(1)
func (s *MultiSet) AddNums(nums []int) {
    // Time: O(n)
    for _, num := range nums {
        // Time: O(1)
        s.AddNum(num)
    }
}

// Time: O(1)
// Space: O(1)
func (s *MultiSet) AddNum(num int) {
    // Time: O(1)
    s.items[num]++
}

// Time: O(1)
// Space: O(1)
func (s *MultiSet) OccurenceOf(num int) int {
    // Time: O(1)
    occ, ok := s.items[num]
    if !ok {
        return 0
    }
    return occ
}

// Time: O(1)
// Space: O(1)
func (s *MultiSet) HasDuplicate(num int) bool {
    // Time: O(n)
    occ := s.OccurenceOf(num)
    return occ > 1
}
```

We could have also create

```go
// Time: O(n)
// Space: O(n)
func BuildMultiSet(nums []int) *MultiSet {
    s := NewMultiSet()
    // Time: O(n)
    // Space: O(n)
    s.Add(nums)
    return s
}
```

### Solution 4: Another `multiset` solution

or we could iterate over the map instead of the slice (same algorithm):

```go
// Time: O(n+n) = O(2n) = O(n)
// Space: O(n)
func containsDuplicate(nums []int) bool {
    // Space: O(n)
    set := NewMultiSet()
    
    // Time: O(n)
    set.AddNums(nums)
    
    // Time: O(n)
    return set.HasDuplicate()
}

type MultiSet struct {
    items map[int]int
}

func NewMultiSet() *MultiSet {
    return &MultiSet{
        items: make(map[int]int),
    }
}

// Time: O(n)
// Space: O(1)
func (s *MultiSet) AddNums(nums []int) {
    // Time: O(n)
    for _, num := range nums {
        // Time: O(1)
        s.AddNum(num)
    }
}

// Time: O(1)
// Space: O(1)
func (s *MultiSet) AddNum(num int) {
    // Time: O(1)
    s.items[num]++
}

// Time: O(n)
// Space: O(1)
func (s *MultiSet) HasDuplicate() bool {
    // Time: O(n)
    for _, val := range s.items {
        // Time: O(1)
        if val > 1 {
            return true
        }
    }
    return false
}
```

### Solution 5: Using a `set` with custom data structure

We don't need to keep in memory the occurence.  
As soon as we have a second occurence, we return true.  
This mean we can use a `set` instead of a `multiset`!  
In go, we usually implement a set with a `map[int]bool` or `map[int]struct{}`.

Time: `O(n)`
Space: `O(n)`

```go
// Time: O(n)
// Space: O(n)
func containsDuplicate(nums []int) bool {
    // Space: O(n)
    set := NewSet()
    
    // Time: O(n)
    for _, num := range nums {
        // Time: O(1)
        if set.Has(num) {
            return true
        }
        // Time: O(1)
        set.Add(num)
    }

    return false
}

type Set struct {
    items map[int]struct{}
}

func NewSet() *Set{
    return &Set{
        items: make(map[int]struct{}),
    }
}

// Time: O(1)
// Space: O(1)
func (s *Set) Add(val int) {
    // Time: O(1)
    s.items[val] = struct{}{}
}

// Time: O(1)
// Space: O(1)
func (s *Set) Has(val int) bool {
    // Time: O(1)
    _, ok := s.items[val]
    return ok
}
```

### Solution 6 : Using a `set` for interviews

Solution `6`, but without a custom data structure and comments to save time! **This is the solution I would do if I was short on time**.  

Time: `O(n)`
Space: `O(n)`

```go
func containsDuplicate(nums []int) bool {
    set := make(map[int]struct{})
    for _, num := range nums {
        if _, hasNum := set[num]; hasNum {
            return true
        }
        set[num] = struct{}{}
    }
    return false
}
```

## `set` vs `multiset`

Set:
- **Description**: Collection of distinct elements
- **Operations**: Insertion (if not present), Deletion, Membership testing
- **Go Implementation**: `set := make(map[ElementType]struct{})`
- **Examples**: Students in a class, Countries in the world

Multiset (Bag)
- **Description**: Collection where elements can appear multiple times
- **Operations**: Insertion (anytime), Deletion (specific occurrence), Counting occurrences
- **Go Implementation**: `multiset := make(map[ElementType]int)` where `int` is the **occurence**
- **Examples**: Word frequency in a document, Fruit counts in a basket

## Next problems

- [219. Contains Duplicate II (Easy)](https://leetcode.com/problems/contains-duplicate-ii/) (see my solution [here](https://leetcode.com/problems/contains-duplicate-ii/discuss/1737679/Go-Sliding-Window-Clean-code-(100)))
- [220. Contains Duplicate III (Hard)](https://leetcode.com/problems/contains-duplicate-iii/) (my solution = WIP)

I hope it helped! =)