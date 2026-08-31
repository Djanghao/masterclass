# Java and Golang solution with explanation and different ideas

**Author:** nathannaveen
**Votes:** 6
**Link:** [https://leetcode.com/problems/destination-city/solutions/973311/](https://leetcode.com/problems/destination-city/solutions/973311/)

---

In the description it says:

Input: paths = [["B","C"],["D","B"],["C","A"]]
Output: "A"
Explanation: All possible trips are: 
"D" -> "B" -> "C" -> "A". 
"B" -> "C" -> "A". 
"C" -> "A". 
"A". 

Using this we can say that the destination is `paths[i][1]` if there is no `paths[j][0]` with the same value.

The second code uses two maps to store the starts and destinations, and if the destination contains `paths[i][0]` we can remove it and not add it to start, same with destination to start. Then there will only be two elements left, one is `start`, and one in `destination`, we only want to return the one in `destination` because that is the end destination.

**The First Code: (JAVA)**

```
public String destCity(List<List<String>> paths) {
	String isEndDestination = "";
	for (int i = 0; i < paths.size(); i++) {
		isEndDestination = paths.get(i).get(1);
		boolean end = true;
		for (int j = 0; j < paths.size(); j++) {
			if (paths.get(j).get(0).equals(isEndDestination)){
				end = false;
				break;
			}
		}
		if (end){
			return isEndDestination;
		}
	}
	return isEndDestination;
}
```

**The Second Code: (GOLANG)**

```
func destCity(paths [][]string) string {
	start := make(map[string]int)
	destination := make(map[string]int)

	for _, path := range paths {
		if destination[path[0]] == 1 {
			delete(destination, path[0])
		} else {
			start[path[0]] = 1
		}
		if start[path[1]] == 1 {
			delete(start, path[1])
		} else {
			destination[path[1]] = 1
		}
	}
	
	for s, _ := range destination {
		return s
	}
	return ""
}
```

***

In this code I do:

```
for s, _ := range destination {
	return s
}
```
To get the first and only element in the map. Does anyone know a better way to find the first element of a map in go?


