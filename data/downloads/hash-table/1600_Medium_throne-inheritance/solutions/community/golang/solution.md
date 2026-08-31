# Throne Inheritance

**Author:** ShaksRA
**Votes:** 0
**Link:** [https://leetcode.com/problems/throne-inheritance/solutions/5717512/](https://leetcode.com/problems/throne-inheritance/solutions/5717512/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
type ThroneInheritance struct {
	king string
	dead map[string]bool
	g map[string][]string
}


func Constructor(kingName string) ThroneInheritance {
	return ThroneInheritance{kingName, map[string]bool{}, map[string][]string{}}
}


func (this *ThroneInheritance) Birth(parentName string, childName string)  {
	this.g[parentName] = append(this.g[parentName], childName)
}


func (this *ThroneInheritance) Death(name string)  {
	this.dead[name] = true
}


func (this *ThroneInheritance) GetInheritanceOrder() (ans []string) {
	var dfs func(string)
	dfs = func(x string) {
		if !this.dead[x] {
			ans = append(ans, x)
		}
		for _, y := range this.g[x] {
			dfs(y)
		}
	}
	dfs(this.king)
	return
}


/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * obj := Constructor(kingName);
 * obj.Birth(parentName,childName);
 * obj.Death(name);
 * param_3 := obj.GetInheritanceOrder();
 */
```