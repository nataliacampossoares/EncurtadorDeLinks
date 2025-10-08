export class LinkController {
  constructor(service) {
    this.service = service;
  }

  async getLinks(request, reply) {
    const data = await this.service.getAllLinks();
    reply.send({ data });
  }

  async createLink(request, reply) {
    const { url_original, legenda } = request.body;
    const data = await this.service.createLink({ url_original, legenda });
    reply.status(201).send({ data });
  }

  async deleteLink(request, reply) {
    const { id } = request.params;
    await this.service.deleteLink(id);
    reply.status(204).send();
  }

  async getLinkById(request, reply) {
    const { id } = request.params;
    const data = await this.service.getLinkById(id);
    reply.status(200).send({ data });
  }
}
