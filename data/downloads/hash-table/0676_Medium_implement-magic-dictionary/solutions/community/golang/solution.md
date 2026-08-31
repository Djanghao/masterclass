# Golang Hashmap

**Author:** Archaeoraptor
**Votes:** 1
**Link:** [https://leetcode.com/problems/implement-magic-dictionary/solutions/1656090/](https://leetcode.com/problems/implement-magic-dictionary/solutions/1656090/)

---

```golang
type MagicDictionary struct {
	neightbour map[string]int
	origin     map[string]int
}

func Constructor() MagicDictionary {
	m := MagicDictionary{map[string]int{}, map[string]int{}}
	return m
}

func (this *MagicDictionary) BuildDict(dictionary []string) {
	for _, word := range dictionary {
		this.origin[word]++
		for i, _ := range word {
			t := []byte(word)
			t[i] = '_'
			this.neightbour[string(t)]++
		}
	}
}

func (this *MagicDictionary) Search(searchWord string) bool {
	cnt := this.origin[searchWord]
	for i, _ := range searchWord {
		t := []byte(searchWord)
		t[i] = '_'
		if cnt > 1 || this.neightbour[string(t)] > cnt {
			return true
		}
	}
	return false
}
```