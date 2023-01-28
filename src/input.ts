import * as core from '@actions/core';

export type ActionInput = {
  ketryxUrl: string;
  apiKey: string;
  project: string;
  version?: string;
  commitSha?: string;
  buildName?: string;
  log?: string;
  testCucumberPath?: string;
};

export function readActionInput(): ActionInput {
  const ketryxUrl = core.getInput('ketryx-url') || 'https://app.ketryx.com';

  const project = core.getInput('project');
  if (!project) {
    throw new Error('Missing input project');
  }

  const apiKey = core.getInput('api-key');
  if (!apiKey) {
    throw new Error('Missing input api-key');
  }

  const version = core.getInput('version');
  const commitSha = core.getInput('commit-sha') || process.env.GITHUB_SHA;
  const buildName = core.getInput('build-name');

  const testCucumberPath = core.getInput('test-cucumber-path');

  const log = core.getInput('log');

  return {
    ketryxUrl,
    project,
    version,
    commitSha,
    apiKey,
    log,
    testCucumberPath,
    buildName,
  };
}
