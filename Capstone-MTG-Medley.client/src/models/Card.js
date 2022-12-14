export class Card {

  constructor(data) {
    this.artist = data.artist || ""
    this.cmc = data.cmc || null
    this.colors = data.colors || []
    this.count = data.count || 1
    this.flavor_text = data.flavor_text || ""
    this.cardId = data.id || ""
    this.accountId = data.accountId 
    this.image_uris = data.image_uris || {}
    // this.image_normal = data.image_uris.normal || ""
    this.layout = data.layout || ""
    this.legalities = data.legalities || {}
    this.mana_cost = data.mana_cost || ""
    this.name = data.name || ""
    this.oracle_id = data.oracle_id || ""
    this.oracle_text = data.oracle_text || ""
    this.power = data.power || ""
    this.prices = data.prices|| {}
    this.purchase_uris = data.purchase_uris || {}
    this.reprint = data.reprint || false
    this.reserved = data.reserved || false
    this.set = data.set || ""
    this.set_name = data.set_name || ""
    this.toughness = data.toughness || null
    this.type_line = data.type_line || ""
  }
}