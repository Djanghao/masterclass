# Java-2ms-0(n)

**Author:** Dhara_B
**Votes:** 15
**Link:** [https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/1693310/](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/1693310/)

---

* 	first append the fill at the end of str based on the length of str
* 	divide into k length
	
	    public String[] divideString(String str, int k, char fill) {
	        
	    	// return if k and str are same
	    	if (str.length() == k)
				return new String[] { str };

			int index = 0;
			int stringLength = str.length();
			StringBuilder sb = new StringBuilder(str);
			
			// find size of array creation
			String[] strArr = (stringLength % k == 0) ? new String[stringLength / k] : new String[(stringLength / k) + 1];

			//append fill after str 
			if (stringLength % k != 0) {
				for (int i = 0; i < k - (stringLength % k); i++) {
					sb.append(fill);
				}
			}

			//divide into k
			for (int i = 0; i < sb.length(); i += k) {			
				strArr[index] = (sb.substring(i, i + k));
				++index;

			}

			return strArr;
	