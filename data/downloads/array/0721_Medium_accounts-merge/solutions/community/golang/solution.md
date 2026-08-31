# Disjoint set solution

**Author:** eshu0007
**Votes:** 2
**Link:** [https://leetcode.com/problems/accounts-merge/solutions/3790078/](https://leetcode.com/problems/accounts-merge/solutions/3790078/)

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
```
func accountsMerge(accounts [][]string) [][]string {
    m:=make(map[string]int,len(accounts))
    parent:=make([]int,len(accounts))
    for i,_:=range parent{
        parent[i]=i
    }
    for i,account:=range accounts{
     for j,email:=range account{
        if j==0{
            continue
        } 
        if _,ok:=m[email];!ok{
        m[email]=i
        }else{
            disjoint(m[email],i,parent)
        }
     }
    }
    mergedMail:=make([][]string,len(accounts))
    for key,val:=range m{
        Uparent:=findUParent(val,parent)
        mergedMail[Uparent]=append(mergedMail[Uparent],key)
    }
    res:=[][]string{}
    for i:=0;i<len(accounts);i++{
        if len(mergedMail[i])==0{
            continue
        }
        sort.Strings(mergedMail[i])
        temp:=[]string{}
        temp=append(temp,accounts[i][0])
        for _,val:=range mergedMail[i]{
            temp=append(temp,val)
        }
        res=append(res,temp)
    }
    return res
}

func findUParent(x int, parent []int) int {//find ultimate parent
	if x != parent[x] {
		parent[x] = findUParent(parent[x], parent)
	}
	return parent[x]
}

func disjoint(a int, b int, parent []int) {
	a = findUParent(a, parent)
	b = findUParent(b, parent)
	parent[b] = a
}

func same(a int, b int, parent []int) bool {
	return findUParent(a, parent) == findUParent(b, parent)
}
```