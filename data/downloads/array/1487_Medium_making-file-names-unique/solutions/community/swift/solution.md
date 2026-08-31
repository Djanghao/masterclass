# Dictionary and Set, 100% faster time and space

**Author:** Gman4291
**Votes:** 0
**Link:** [https://leetcode.com/problems/making-file-names-unique/solutions/4564234/](https://leetcode.com/problems/making-file-names-unique/solutions/4564234/)

---

# Approach
We use a map to store the possibly first available number to append and a set to check if a name was already used.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
func getFolderNames(_ names: [String]) -> [String] {

  var output = [String]()
  // Avoid table realocation
  output.reserveCapacity(names.count)
  var seen = Set<String>()
  var seenFirstAvailable = [String: Int]()

  for name in names {
    if seen.contains(name) {
      var number = seenFirstAvailable[name, default: 1]
      var nameWithNumber = name + "(\\(number))"
      // In case "name(x)" was added directly from the input names we check the name
      while seen.contains(nameWithNumber) {
        number += 1
        nameWithNumber = name + "(\\(number))"
      }
      seenFirstAvailable[name] = number + 1
      seen.insert(nameWithNumber)
      output.append(nameWithNumber)
    } else {
      seen.insert(name)
      output.append(name)
      seenFirstAvailable[name] = 1
    }
  }

  return output
}
```