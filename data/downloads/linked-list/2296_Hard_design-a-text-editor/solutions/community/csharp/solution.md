# C# StringBuilder

**Author:** Msey
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-a-text-editor/solutions/2895645/](https://leetcode.com/problems/design-a-text-editor/solutions/2895645/)

---

The first intuitive solution was to use two Stacks but I didn't like the idea of extra allocation to get stack data and push it back afterwards
# Code
```
    public class TextEditor
    {
        StringBuilder sb;
        int cursorPosition = 0;

        public TextEditor()
        {
            sb = new();
        }

        public void AddText(string text)
        {
            sb.Insert(cursorPosition, text);
            cursorPosition += text.Length;
        }

        public int DeleteText(int k)
        {
            int deletedAmount = k;

            if (cursorPosition < k)
            {
                deletedAmount = cursorPosition;
                cursorPosition = 0;
            }
            else
            {
                cursorPosition -= k;
            }

            sb.Remove(cursorPosition, deletedAmount);

            return deletedAmount;
        }

        public string CursorLeft(int k)
        {
            cursorPosition = Math.Max(0, cursorPosition - k);

            if (cursorPosition < 10)
            {
                return sb.ToString(0, cursorPosition);
            }

            return sb.ToString(cursorPosition - 10, 10);
        }

        public string CursorRight(int k)
        {
            cursorPosition = Math.Min(sb.Length, cursorPosition + k);

            if (cursorPosition < 10)
            {
                return sb.ToString(0, cursorPosition);
            }

            return sb.ToString(cursorPosition - 10, 10);
        }
    }
```