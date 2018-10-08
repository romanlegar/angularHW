import ReferenceItem from "./ReferenceItem";
class  Encyclopedia  extends ReferenceItem {
  edition: number
  constructor(
   title: string,
   year: number,
   edition: number){
      super(title, year)
    }
    printItem(){
      super.printItem();
      console.log()
    }
}

export default Encyclopedia;
