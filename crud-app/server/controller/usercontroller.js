import User from "../models/usermodel.js";

export const create = async (req, res) => {
  try {
    const userdata = new User(req.body);

    if (!userdata) {
      return res.status(404).json({ msg: "user data not fount" });
    }

    const saveddata = await userdata.save();
    res.status(200).json({ msg: "created sucessfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getall = async (req, res) => {
  try {
    const userdata = await User.find();
    if (!userdata) {
      res.status(500).json({ error: "data not fount" });
    }
    res.status(200).json(userdata);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

export const getone = async (req, res) => {
  try {
    const id = req.params.id;
    const userexist = await User.findById(id);
    if (!userexist) {
      return res.status(500).json({ mes: "cant get data" });
    }
    res.status(200).json(userexist);
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userexist = await User.findById(id);
    if (!userexist) {
      return res.status(500).json({ mes: "user not found" });
    }
    const updatedData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ msg: "successfully updated" });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.status(200).json({ msg: "deleted sucessfully" });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};
