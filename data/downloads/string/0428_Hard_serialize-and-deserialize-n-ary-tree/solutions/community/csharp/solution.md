# 💥 C# | Runtime beats 90.00%, Memory beats 60.00%

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/solutions/5741896/](https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/solutions/5741896/)

---

# Intuition
The problem requires converting an N-ary tree into a string (serialization) and reconstructing it back from that string (deserialization). The key challenge is ensuring that the structure of the tree is preserved, including the values and the relationships between parent nodes and their children.

# Approach
Serialization: Traverse the tree and store each node's value, wrapping its children in parentheses to represent their relationship.
 
Separate multiple children with commas.

Deserialization: Reverse the process by reading the string, identifying values and their respective children (based on parentheses and commas), and rebuilding the original tree structure.

# Complexity
- Time complexity:

  Serialization: O(n) - We visit each node once to serialize it.

  Deserialization: O(n) - We parse the string and rebuild the tree, visiting each node once.

- Space complexity:

  Serialization: O(n) - For the string buffer to store the serialized tree.

  Deserialization: O(n) - For the recursive call stack and the tree structure being rebuilt.

# Code
```csharp []
public class Codec
{
    const string ChildrenOpenToken = "(";
    const string ChildrenCloseToken = ")";
    const string ChildrenSeparatorToken = ",";

    public string serialize(Node root)
    {
        if (root == null) return string.Empty;

        var buffer = new StringBuilder();
        serialize(root, buffer);
        return buffer.ToString();
    }

    private void serialize(Node node, StringBuilder buffer)
    {
        buffer.Append(node.val);
        buffer.Append(ChildrenOpenToken);
        var first = true;
        foreach (var child in node.children)
        {
            if (first)
            {
                first = false;
                serialize(child, buffer);
            }
            else
            {
                buffer.Append(ChildrenSeparatorToken);
                serialize(child, buffer);
            }
        }
        buffer.Append(ChildrenCloseToken);
    }
	
    public Node deserialize(string data)
    {
        if (string.IsNullOrEmpty(data)) return null;

        var start = 0;
        return deserialize(data, ref start);
    }

    private Node deserialize(string data, ref int start)
    {
        var end = data.IndexOf(ChildrenOpenToken, start);
        var val = int.Parse(data[start..end]);
        start = end + ChildrenOpenToken.Length;

        var children = new List<Node>();
        while (!nextTokenIs(ChildrenCloseToken, data, start))
        {
            var child = deserialize(data, ref start);
            children.Add(child);

            if (nextTokenIs(ChildrenSeparatorToken, data, start))
            {
                start += ChildrenSeparatorToken.Length;
            }
        }

        start += ChildrenCloseToken.Length;
        return new Node(val, children);
    }

    private bool nextTokenIs(string token, string data, int start)
    {
        return data.IndexOf(token, start) == start;
    }
}

```