interface FrameworkExample {
    title: string;
    description: string;
    withFramework: string;
    withoutFramework: string;
  }
  
  interface FrameworkExamples {
    [key: string]: FrameworkExample;
  }
  
  export const frameworkComparisons: FrameworkExamples = {
    example1: {
      title: "titre1",
      description: "description1",
      withFramework: `<div>avec framework1</div>`,
      withoutFramework: `<div>sans framework1</div>`
    },
    example2: {
        title: "titre2",
        description: "description2",
        withFramework: `<div>avec framework2</div>`,
        withoutFramework: `<div>sans framework2</div>`
        },
    example3: {
        title: "titre3",
        description: "description3",
        withFramework: `<div>avec framework3</div>`,
        withoutFramework: `<div>sans framework3</div>`
        },
    example4: {
        title: "titre4",
        description: "description4",
        withFramework: `<div>avec framework4</div>`,
        withoutFramework: `<div>sans framework4</div>`
        }
  };
  
  export default frameworkComparisons;