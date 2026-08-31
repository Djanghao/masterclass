# Scala solution

**Author:** chlr1987
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/2106642/](https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/2106642/)

---


```
object Solution {
    
    object TreeNode {
        def unapply(node: TreeNode): Option[(Option[TreeNode],Option[TreeNode])] = {
            Some(Option(node.left), Option(node.right))
        }
    }
    
    implicit class Helper(val li: List[TreeNode]) {
        
        def addNode(node: TreeNode): List[TreeNode] = {
            li match {
                case Nil => Nil
                case _ => node :: li
            }
        }
        
    }

    /**
     get most common ancestor between two node path
     */    
    def track(node: TreeNode, tgt: Int): List[TreeNode] = {
        if(node.value == tgt) return List(node)
        node match {
            case TreeNode(Some(x), None) => track(x, tgt) addNode node 
            case TreeNode(None, Some(x)) => track(x, tgt) addNode node 
            case TreeNode(None, None) => Nil
            case TreeNode(Some(x), Some(y)) => (track(x, tgt) addNode node) ++ (track(y, tgt) addNode node)
        }
    }
    
    /**
     get most common ancestor between two node path
    */
    def mca(li1: List[TreeNode], 
            li2: List[TreeNode],
            prev: TreeNode): TreeNode = {
        (li1, li2) match {
            case (_ :: _, Nil) => prev
            case (Nil, _ :: _) => prev
            case (h1 :: _, h2 :: _) if h1 != h2 => prev
            case (h1 :: t1, h2 :: t2) if h1 == h2 => mca(t1, t2, h1)
            case _ => prev
        }
    }
    
    def findDistance(root: TreeNode, p: Int, q: Int): Int = {
        val li1 = track(root, p)
        val li2 = track(root, q)
        val common = mca(li1, li2, null)
        if((li1.toSet - li2.toSet).isEmpty) {
            track(common, p).length-1
        } else if((li1.toSet - li2.toSet).isEmpty) {
            track(common, p).length-1
        } else {
            track(common, p).length + track(common, q).length - 2
        }
    }
}
```