# Two Solutions | Using Stack and Using slots | Java | Kotlin | Hyder Nabi

**Author:** HyderNabi
**Votes:** 0
**Link:** [https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solutions/3918165/](https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solutions/3918165/)

---


# Slots
```
class Solution {
    public boolean isValidSerialization(String preorder) {
		String input[] = preorder.split(",");
		int val = 1;
		for(String str : input) {
			val--;
			if(val<0)return false;
			if(!str.equals("#"))val+=2;
		}
		return val==0;
    }
}
```

# Stack
```
class Solution {
    public boolean isValidSerialization(String preorder) {
		if(preorder.charAt(0) == '#'){
			if(preorder.length()==1)return true;
			else return false;
		}

		String input[] = preorder.split(",");
		Stack<Integer> stack = new Stack<>();

		for(int i=0;i<input.length;i++) {
			if(!input[i].equals("#")) {
				stack.push(2);
			}else {
				stack.push(stack.pop()-1);
				while(stack.peek()==0) {
					stack.pop();
					if(stack.isEmpty()) {
						if(i==input.length-1)return true;
						else return false;
					}else {
						stack.push(stack.pop()-1);
					}				
				}
			}
		}
		return (stack.isEmpty())? true : false;
    }
}
```
# Kotlin
```
class Solution {
    fun isValidSerialization(preorder: String): Boolean {
        val inputs = preorder.split(",")
        var value = 1
        for(input in inputs){
            value--
            if(value<0)return false
            if(input != "#") value+=2
        }
        return value==0
    }
}
```