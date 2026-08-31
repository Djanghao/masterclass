# Golang simple 100%

**Author:** mutarevic
**Votes:** 2
**Link:** [https://leetcode.com/problems/group-shifted-strings/solutions/1358494/](https://leetcode.com/problems/group-shifted-strings/solutions/1358494/)

---

#### Strategy
1) Loop through the list of strings and create signatures from each string that can map to a common ID. How do we do that?
2) We take the difference between each character in the string example: a->b = 1, a -> c = 2
3) deal with the wrapped words


```
func groupStrings(strs []string) [][]string {
	dict = map[string][]string{}
	
	for _, str := range strings {
	    sb := strings.Builder{}
		for i := 0; i < len(str) - 1; i++ {
		   // If we didn't have to worry about the wrap it would just be:
		   // diff := int(str[i] - 'a') - int(str[i+1] - 'a'))
		   // but because we have to worry about the wrap we add the 26 and modulo
		   diff := (26  + int(str[i] - 'a') - int(str[i+1] - 'a')) % 26
		   
		   // convert to string anyway you want
		   sb.WriteString(fmt.Sprintf("%d", diff))
		}
	
	  key := sb.String()
	  if _, ok := dict[key]; !ok {
	    dict[key] = make([]string, 0) 
	  }
	  dict[key] = append(dict[key], str)
	}
	
	res := [][]string{}
	for _, v := range dict {
	  res = append(res, v)
	}
	
	return res
}
```