# PHP | Recursive ('N-ary Tree Postorder Traversal')

**Author:** alexander_d
**Votes:** 1
**Link:** [https://leetcode.com/problems/n-ary-tree-postorder-traversal/solutions/872909/](https://leetcode.com/problems/n-ary-tree-postorder-traversal/solutions/872909/)

---

```
class Solution
{
    /**
     * @param Node $root
     *
     * @return integer[]
     */
    public function postorder($root, array $result = []): array
    {
        if (null !== $root) {
            foreach ($root->children as $child) {
                $result = $this->postorder($child, $result);
            }
            $result[] = $root->val;
        }
        
        return $result;
    }
}
```