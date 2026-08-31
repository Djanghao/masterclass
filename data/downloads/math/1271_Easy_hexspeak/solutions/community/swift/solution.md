# Swift 4ms

**Author:** sghiassy
**Votes:** 0
**Link:** [https://leetcode.com/problems/hexspeak/solutions/675970/](https://leetcode.com/problems/hexspeak/solutions/675970/)

---


```
class Solution {
	let VALID:Dictionary<Character,String> = ["A":"A", "B":"B", "C":"C", "D":"D", "E":"E", "F":"F", "1":"I", "0":"O"]
	
	func toHexspeak(_ num: String) -> String {
		guard let num = Int(num) else { return "ERROR" } // Convert string to a number
		let str = String(num, radix:16, uppercase:true) // Convert number to hex

		var ans:[String] = Array(repeatElement("", count: str.count))
		
		for n in str.enumerated() {
			if let conversion = VALID[n.element] { // Convert "1"->"I", "0"->"O", etc, etc
				ans[n.offset] = conversion
			} else {
				return "ERROR"
			}
		}
		
		return ans.joined()
	}
}
```