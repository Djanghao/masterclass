# [Golang] Two pointers

**Author:** user0440H
**Votes:** 1
**Link:** [https://leetcode.com/problems/friends-of-appropriate-ages/solutions/3230757/](https://leetcode.com/problems/friends-of-appropriate-ages/solutions/3230757/)

---

It is a straightforward solution but took a bit of time to get it right for people with same ages.

```go
func numFriendRequests(ages []int) int {
  // Let's sort the ages in ascendig order
  sort.Ints(ages)
  counts := make(map[int]int)
  // Keep track of the first occurrence of each age in the sorted order
  // so that we can get the number of people that are below the current age
  // and the other same age people that we can send friend requests to.
  first := make(map[int]int)
  for i := 0; i < len(ages); i++ {
    counts[ages[i]]++
    if _, ok := first[ages[i]]; !ok {
      first[ages[i]] = i
    }
  }
  // We're going to use a two pointers approach. Left is updated to point to the
  // person with the minimum age that follows the requirements for the current person.
  // Then the number of people the current person can send friend requests to is the
  // number of people between pointed by left and current person (excluding)
  left := 0
  var res int
  for right := 0; right < len(ages); right++ {
    minAge := float64(ages[right]) * 0.5 + 7.0
    for left < right && float64(ages[left]) <= minAge {
      left++
    }
    // left can move forward when we have the same age repeated
    res += first[ages[right]] - min(first[ages[right]], left)
    if float64(ages[right]) > minAge {
      res += counts[ages[right]]-1
    }
  }
  return res
}

func min(a, b int) int {
  if a < b {
    return a
  }
  return b
}
```