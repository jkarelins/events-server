const { Router } = require("express");
const router = new Router();
const Event = require("./model");

router.post("/", (req, res, next) => {
  const event = req.body;
  Event.create(event)
    .then(newEvent => res.json(newEvent))
    .catch(next);
});

router.get("/", (req, res, next) => {
  Event.findAll()
    .then(events => res.json(events))
    .catch(next);
});

router.get("/:eventId", (req, res, next) => {
  const { eventId } = req.params;
  Event.findByPk(eventId)
    .then(event => {
      if (event) {
        res.json(event);
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

router.put("/:eventId", (req, res, next) => {
  Event.findByPk(req.params.eventId)
    .then(event => event.update(req.body))
    .then(event => res.json(event))
    .catch(next);
});

router.delete("/:eventId", (req, res, next) => {
  Event.destroy({ where: { id: req.params.eventId } })
    .then(number => res.json({ removed: number }))
    .catch(next);
});

module.exports = router;
