const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class CandidatesController 
{
  async getAllCandidates(req, res) 
  {
    try 
    {
      const candidates = await prisma.candidate.findMany();
      res.send(candidates);
    } catch (error) 
    {
      res.status(500).send(error);
    }
  }
  async createCandidate(req, res) 
  {
    try 
    {
      const 
      {
        candidateFirstName,
        candidateLasttName,
        candidateEmail,
        candidatePhone,
        candidateCVPath,
        candidateState,
        candidateSalary,
        candidateOffer,
        candidateNote,
        Archive,
        dateCreated,
        createdBy,
        dateUpdated,
        updatedBy
      } = req.body;
      const candidate = await prisma.candidate.create({
        data: 
        {
          candidateFirstName,
          candidateLasttName,
          candidateEmail,
          candidatePhone,
          candidateCVPath,
          candidateState,
          candidateSalary,
          candidateOffer,
          candidateNote,
          Archive,
          dateCreated,
          createdBy,
          dateUpdated,
          updatedBy
        }
      });
      res.send(candidate);
    } catch (error) 
    {
      res.status(500).send(error);
    }
  }

  async getCandidate(req, res) {
    try {
      const { id } = req.params;
      const candidate = await prisma.candidate.findOne({
        where: {
          id
        }
      });
      res.send(candidate);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async updateCandidate(req, res) {
    try {
      const { id } = req.params;
      const {
        candidateFirstName,
        candidateLasttName,
        candidateEmail,
        candidatePhone,
        candidateCVPath,
        candidateState,
        candidateSalary,
        candidateOffer,
        candidateNote,
        Archive,
        dateCreated,
        createdBy,
        dateUpdated,
        updatedBy
      } = req.body;
      const candidate = await prisma.candidate.update({
        where: {
          id
        },
        data: {
          candidateFirstName,
          candidateLasttName,
          candidateEmail,
          candidatePhone,
          candidateCVPath,
          candidateState,
          candidateSalary,
          candidateOffer,
          candidateNote,
          Archive,
          dateCreated,
          createdBy,
          dateUpdated,
          updatedBy
        }
      });
      res.send(candidate);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  async deleteCandidate(req, res) {
    const { id } = req.params;
  
    try {
      const deletedCandidate = await prisma.candidate.delete({
        where: {
          id: Number(id)
        }
      });
  
      return res.json({
        message: 'Candidate successfully deleted',
        deletedCandidate
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Failed to delete candidate',
        error: error.message
      });
    }
  }
  
}
     
