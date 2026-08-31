# Tree Deserializer and Visualizer for Python

**Author:** StefanPochmann
**Votes:** 292
**Link:** [https://leetcode.com/problems/recover-binary-search-tree/solutions/32539/](https://leetcode.com/problems/recover-binary-search-tree/solutions/32539/)

---

Wrote some tools for my own local testing. For example `deserialize('[1,2,3,null,null,4,null,null,5]')` will turn that into a tree and return the root [as explained in the FAQ](https://leetcode.com/faq/). I also wrote a visualizer. Two examples:

`drawtree(deserialize('[1,2,3,null,null,4,null,null,5]'))`:

![enter image description here][1]

`drawtree(deserialize('[2,1,3,0,7,9,1,2,null,1,0,null,null,8,8,null,null,null,null,7]'))`:

![enter image description here][2]

Here's the code. If you save it as a Python script and run it, it should as a demo show the above two pictures in turtle windows (one after the other). And you can of course import it from other scripts and then it will only provide the class/functions and not show the demo.

    class TreeNode:
        def __init__(self, val, left=None, right=None):
            self.val = val
            self.left = left
            self.right = right
        def __repr__(self):
            return 'TreeNode({})'.format(self.val)
        
    def deserialize(string):
        if string == '{}':
            return None
        nodes = [None if val == 'null' else TreeNode(int(val))
                 for val in string.strip('[]{}').split(',')]
        kids = nodes[::-1]
        root = kids.pop()
        for node in nodes:
            if node:
                if kids: node.left  = kids.pop()
                if kids: node.right = kids.pop()
        return root
    
    def drawtree(root):
        def height(root):
            return 1 + max(height(root.left), height(root.right)) if root else -1
        def jumpto(x, y):
            t.penup()
            t.goto(x, y)
            t.pendown()
        def draw(node, x, y, dx):
            if node:
                t.goto(x, y)
                jumpto(x, y-20)
                t.write(node.val, align='center', font=('Arial', 12, 'normal'))
                draw(node.left, x-dx, y-60, dx/2)
                jumpto(x, y-20)
                draw(node.right, x+dx, y-60, dx/2)
        import turtle
        t = turtle.Turtle()
        t.speed(0); turtle.delay(0)
        h = height(root)
        jumpto(0, 30*h)
        draw(root, 0, 30*h, 40*h)
        t.hideturtle()
        turtle.mainloop()
        
    if __name__ == '__main__':
        drawtree(deserialize('[1,2,3,null,null,4,null,null,5]'))
        drawtree(deserialize('[2,1,3,0,7,9,1,2,null,1,0,null,null,8,8,null,null,null,null,7]'))

  [1]: http://pochmann.org/leetcode/images/tree1.png
  [2]: http://pochmann.org/leetcode/images/tree2.png