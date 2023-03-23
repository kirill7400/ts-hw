class Movie {
  private year: number;
  private country: string;
  private tagline: string;
  private genre: string;
  private time: number;
  public items: any;

  constructor(year: number, country: string, tagline: string, genre: string, time: number) {
    this.year = year
    this.country = country
    this.tagline = tagline
    this.genre = genre
    this.time = time

    this.items = {}

    this.put2Arr()
  }

  put2Arr(): void {
    for (let key in this) {
      if (typeof this[key] === 'string' || typeof this[key] === 'number')
        this.items[key] = this[key]
    }
  }

  getMovie(): object {
    return this.items
  }
}

export default Movie