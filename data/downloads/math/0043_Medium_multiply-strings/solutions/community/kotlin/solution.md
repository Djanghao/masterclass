# [Java/C++/Python/JavaScript/Kotlin/Swift]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 5
**Link:** [https://leetcode.com/problems/multiply-strings/solutions/1990835/](https://leetcode.com/problems/multiply-strings/solutions/1990835/)

---

***Hello it would be my pleasure to introduce myself Darian.***

***Java***
```
public String multiply(String num1, String num2) {
    int m = num1.length(), n = num2.length();
    int[] pos = new int[m + n];
   
    for(int i = m - 1; i >= 0; i--) {
        for(int j = n - 1; j >= 0; j--) {
            int mul = (num1.charAt(i) - '0') * (num2.charAt(j) - '0'); 
            int p1 = i + j, p2 = i + j + 1;
            int sum = mul + pos[p2];

            pos[p1] += sum / 10;
            pos[p2] = (sum) % 10;
        }
    }  
    
    StringBuilder sb = new StringBuilder();
    for(int p : pos) if(!(sb.length() == 0 && p == 0)) sb.append(p);
    return sb.length() == 0 ? "0" : sb.toString();
}
```

***C++***
```
class Solution {
public:
    string multiply(string num1, string num2) {
        // handle edge-case where the product is 0
        if (num1 == "0" || num2 == "0") return "0";
        
        // num1.size() + num2.size() == max no. of digits
        vector<int> num(num1.size() + num2.size(), 0);
        
        // build the number by multiplying one digit at the time
        for (int i = num1.size() - 1; i >= 0; --i) {
            for (int j = num2.size() - 1; j >= 0; --j) {
                num[i + j + 1] += (num1[i] - '0') * (num2[j] - '0');
                num[i + j] += num[i + j + 1] / 10;
                num[i + j + 1] %= 10;
            }
        }
        
        // skip leading 0's
        int i = 0;
        while (i < num.size() && num[i] == 0) ++i;
        
        // transofrm the vector to a string
        string res = "";
        while (i < num.size()) res.push_back(num[i++] + '0');
        
        return res;
    }
};
```

***Python***
```
class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        return str(self.strint(num1)*self.strint(num2))
    def strint(self,n):
        result=0
        for i in range(len(n)):
            result = result*10 + ord(n[i])-ord('0')
        return result
```

***JavaScript***
```
const multiply = function(num1, num2) {
    const dp = [...Array(num1.length+num2.length)].fill(0); 
    for(let i = num1.length-1; i >= 0; i--){
      for(let j = num2.length-1; j >= 0; j--){
	  
	  //Define
		const prevRemainder  = dp[i+j+1] 
        const product = num1[i]*num2[j]+prevRemainder
        const unitsDigit = product%10
        const carryOver = Math.floor(product/10)
			
		//Update
        dp[i+j+1] = unitsDigit;
		dp[i+j] += carryOver
       }
    }
    
    //Delete leading-zeroes
    let idx = 0
    while(dp[idx] === 0) dp.shift()
    if(!dp.length) return "0"
    return dp.join("") 
};
```

***Kotlin***
```
fun multiply(num1: String, num2: String): String {
    if (num1 == "0" || num2 == "0") return "0"
    
    val num1 = StringBuilder(num1).reversed().toString()
    val num2 = StringBuilder(num2).reversed().toString()
    val len1 = num1.length; val len2 = num2.length
    
    val sums = IntArray(len1 + len2)
    
    for (i in 0..len1 - 1) {
        val a = num1[i] - '0'
        for (j in 0..len2 - 1) {
            val b = num2[j] - '0'
            sums[i + j] += a * b
        }
    }

    val res = StringBuilder()
    var carry = 0
    
    for (sum in sums) {
        val num = (sum + carry) % 10
        carry = (sum + carry) / 10
        res.append(num)
    }

    if (res.last() == '0') res.deleteCharAt(res.length - 1)
    return res.reversed().toString()
}
```

***Swift***
```
class Solution {
    func multiply(_ num1: String, _ num2: String) -> String {
		if (num1 == "0" || num2 == "0") { return "0"}
		let list1 = convertString(num1)
		let list2 = convertString(num2)
		var tmp1 = list1
		var tmp2 = list2
		var lists: [ListNode?] = []
		var index = 0

		while tmp1 != nil {
			var list: ListNode? = nil
			var current = list
			var add = 0
			for _ in 0..<index {
				let node = ListNode(0)
				if list == nil { list = node }
				current?.next = node
				current = node
			}
			while tmp2 != nil {
				let val = tmp1!.val * tmp2!.val + add
				let node = ListNode(val % 10)
				add = val / 10
				if list == nil { list = node }
				current?.next = node
				current = node
				tmp2 = tmp2?.next
			}
			if add > 0 {
				current?.next = ListNode(add)
			}
			tmp1 = tmp1?.next
			tmp2 = list2
			lists.append(list)
			index += 1
		}
		let res = addLists(lists)
        return convertListNode(res)
    }


	func convertString(_ num: String) -> ListNode? {
		var list: ListNode? = nil
		var current = list
		
		for i in num.reversed() {
			let node = ListNode(Int(String(i)) ?? 0)
			if current != nil {
				current?.next = node
			} else {
				list = node
			}
			current = node
		}
		return list
	}


	func convertListNode(_ list: ListNode?) -> String {
		var tmp = list
		var string = ""
		while tmp != nil {
			string = "\\(tmp!.val)\\(string)"
			tmp = tmp!.next;
		}
		return string
	}


	func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        var add = 0
        var _l1 = l1
        var _l2 = l2
        var list: [ListNode] = []
        while _l1 != nil || _l2 != nil {
            let _l1_val = _l1?.val ?? 0
            let _l2_val = _l2?.val ?? 0
            let val = _l1_val + _l2_val + add
            let num = val % 10
            add = val / 10
            list.append(ListNode(num))
            _l1 = _l1?.next
            _l2 = _l2?.next
        }
        if (add == 1) {
            list.append(ListNode(1))
        }
        var head: ListNode?
        for node in list.reversed() {
            node.next = head
            head = node
        }
        return head
    }


	func addLists(_ lists: [ListNode?]) -> ListNode? {
		if lists.count == 1 {
			return lists[0]
		} else {
			var tmp = lists[0]
			for (i, list) in lists.enumerated() {
				if i > 0 {
					tmp = addTwoNumbers(tmp, list)
				}
			}
			return tmp
		}
	}

}
```

***Consider upvote if useful! Hopefully it can be used in your advantage!***
***Take care brother, peace, love!***
***"Open your eyes."***