# Swift - One Liner or Bit

**Author:** h_crane
**Votes:** 3
**Link:** [https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/1151584/](https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/1151584/)

---

swift

1.  One Liner 

```
func squareIsWhite(_ coordinates: String) -> Bool {
	return coordinates.map(\\.unicodeScalars.first!.value).reduce(0, +) % 2 != 0
}
```

2. Bit

```
func squareIsWhite(_ coordinates: String) -> Bool {
	var num: UInt32 = 0

	coordinates.forEach {
		if let i = UInt32(String($0)) {
			num = (num & i) ^ (~num & ~i) // second char
		} else {
			num = $0.unicodeScalars.first!.value // first char
		}
	}

	return num % 2 == 0
}
```