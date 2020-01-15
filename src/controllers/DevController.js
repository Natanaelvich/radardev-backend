import Dev from '../models/Dev';
import axios from 'axios';

export default {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    const devExists = await Dev.findOne({ github_username });

    // verificando se usuario ja existe
    if (devExists) {
      return res.json({ error: 'já existe esse usuário' });
    }
    const response = await axios.get(
      `https://api.github.com/users/${github_username}`
    );

    // eslint-disable-next-line no-undef
    const { name = login, avatar_url, bio } = response.data;
    const techsArray = techs.split(',').map(tech => tech.trim());
    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };
    // cadastrando usuario
    const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location,
    });

    return res.json(dev);
  },
};
