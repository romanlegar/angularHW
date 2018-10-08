class ReferenceItem {
  constructor(
    public title: string,
    protected year: number
  ){
    console.log(`Createng`)
  }
  static department = 'IT';
  private _publisher: string;
  get publisher(): string{
    return this._publisher.toUpperCase();
  }
  set publisher(newPublisher){
     this._publisher = newPublisher;
  }
  printItem(): void {
     console.log(`${this.title} was published in ${this.year}`);
     console.log(ReferenceItem.department);
  }
}

export default ReferenceItem;
