## Projects

Project type

```ts
type Project = {
  id: number;
  title: string;
  description: string;
  categoryId: number;
  image?: string;
  href?: string;
};
```

## Categories

Category type

```ts
type Category = {
  id: number;
  title: string;
  description: string;
  format: "block" | "inline";
};
```
