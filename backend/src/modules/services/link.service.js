export class LinkService {
  
    constructor(linkRepository) {
      this.linkRepository = linkRepository;
    }
  
    getAllLinks() {
      return this.linkRepository.findAll();
    }

    // getLinkById(id) {
    //     return this.linkRepository.findById(id);
    // }
  }