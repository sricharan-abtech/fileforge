import { ConversionJob } from "../converter";

class ConversionQueue {
  private jobs: ConversionJob[] = [];

  add(job: ConversionJob) {
    this.jobs.push(job);
  }

  next() {
    return this.jobs.shift();
  }

  getJobs() {
    return this.jobs;
  }

  clear() {
    this.jobs = [];
  }

  get length() {
    return this.jobs.length;
  }
}

export const queue = new ConversionQueue();