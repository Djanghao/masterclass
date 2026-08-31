# Rolling hash, swift

**Author:** zienag
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/5953201/](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/5953201/)

---

# Intuition
Two pointers approach \u2013 one is running from start to end (suffix), other from end to start (prefix). If suffix and prefix are equal, and that suffix is reachable via k-step \u2013 its the answer. The main complexity is implementing efficient comparison.

# Approach
I tried to use simple rolling hashes (just XOR or buzhash) but they fail, tests are harsh here. Not gonna lie, it's my first time implementing a decent rolling hash, where window can shrink from both left and right.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$
Array of utf8 bytes, cached powers for rolling hashers.

# Code
```swift []
class Solution {
  func minimumTimeToInitialState(_ word: String, _ k: Int) -> Int {
    let word = Array(word.utf8)
    guard word.count > 1 else {
      return 1
    }
    var prefixHasher = RollingHasher()
    for c in word.dropLast() {
      prefixHasher.append(c)
    }
    var suffixHasher = RollingHasher()
    for c in word.dropFirst() {
      suffixHasher.append(c)
    }
    var prefix = word[...].dropLast()
    var suffix = word[...].dropFirst()
    while true {
      let offset = word.count - prefix.count
      if suffixHasher.hashValue == prefixHasher.hashValue, offset % k == 0 {
        if zip(prefix, suffix).allSatisfy({ $0 == $1 }) {
          return offset / k
        }
      }
      if let prefixLast = prefix.last, let suffixFirst = suffix.first {
        prefixHasher.removeLast(prefixLast)
        suffixHasher.removeFirst(suffixFirst)
        prefix = prefix.dropLast()
        suffix = suffix.dropFirst()
      } else {
        break
      }
    }
    return (word.count + k - 1) / k
  }
}

struct RollingHasher {
  private var rollingHashValue = 0
  var hashValue: Int {
    rollingHashValue
  }
  var length = 0
  var precomputedPowers: [Int] = [1]
  var precomputedInverses: [Int] = [1]

  static let modulus = 805306457
  static let base = 29

  @inline(__always)
  mutating func power(_ n: Int) -> Int {
    if precomputedPowers.indices.contains(n) { return precomputedPowers[n] }
    let maxCachedN = precomputedPowers.count - 1
    var maxCachedPow = precomputedPowers[maxCachedN]
    for _ in (maxCachedN + 1)...n {
      maxCachedPow = (Self.base * maxCachedPow) % Self.modulus
      precomputedPowers.append(maxCachedPow)
    }
    return maxCachedPow
  }

  @inline(__always)
  mutating func inversePower(_ n: Int) -> Int {
    if precomputedInverses.indices.contains(n) { return precomputedInverses[n] }
    let powValue = power(n)
    let inverse = modularInverse(powValue, Self.modulus)
    precomputedInverses.append(inverse)
    return inverse
  }

  @inline(__always)
  func modularInverse(_ a: Int, _ m: Int) -> Int {
    return modPow(a, m - 2, m)
  }

  @inline(__always)
  func modPow(_ base: Int, _ exponent: Int, _ modulus: Int) -> Int {
    var result = 1
    var base = base % modulus
    var exponent = exponent

    while exponent > 0 {
      if exponent % 2 == 1 {
        result = (result * base) % modulus
      }
      base = (base * base) % modulus
      exponent /= 2
    }
    return result
  }

  @inline(__always)
  mutating func offsetLeft(_ value: Int, by: Int) -> Int {
    return ((value % Self.modulus) * power(by)) % Self.modulus
  }

  @inline(__always)
  mutating func offsetRight(_ value: Int, by: Int) -> Int {
    return ((value % Self.modulus) * inversePower(by)) % Self.modulus
  }

  @inline(__always)
  mutating func append(_ value: UInt8) {
    rollingHashValue = (
      offsetLeft(rollingHashValue, by: 1) + (simpleHash(value) % Self.modulus)
    ) % Self.modulus
    length += 1
  }

  @inline(__always)
  mutating func removeFirst(_ value: UInt8) {
    let value = offsetLeft(simpleHash(value), by: (length - 1))
    rollingHashValue = (rollingHashValue - value + Self.modulus) % Self.modulus
    length -= 1
  }

  @inline(__always)
  mutating func removeLast(_ value: UInt8) {
    let value = simpleHash(value) % Self.modulus
    rollingHashValue = (rollingHashValue - value + Self.modulus) % Self.modulus
    rollingHashValue = offsetRight(rollingHashValue, by: 1)
    length -= 1
  }
}

@inline(__always)
func simpleHash(_ value: UInt8) -> Int {
    // Multiply by a prime number and mask to ensure it stays within 8 bits
    let hash = Int((value &* 31) & 0xFF)
    return hash
}

```