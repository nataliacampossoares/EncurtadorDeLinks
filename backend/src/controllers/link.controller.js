export class LinkController {
  constructor(service) {
    this.service = service;
  }

  async getLinks(request, reply) {
    return this.service.getAllLinks();
  }
}
