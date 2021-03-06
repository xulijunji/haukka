(function () {
  'use strict';

  function TrialDetailController($stateParams, trial) {
    console.log('trials.detail: TrialDetailController nctid: ', $stateParams.nctid);
    console.log('trials.detail: Trial data:', trial);
    console.log('trials.detail: Highlight markers: ', $stateParams.highlight);
    
    this.nctid = $stateParams.nctid;
    this.trial = trial.ctdata;

    if (!Array.isArray(this.trial.clinical_study.condition)) {
      this.trial.clinical_study.condition = [this.trial.clinical_study.condition];
    }

    var trial_status_class;
    var trial_status = this.trial.clinical_study.overall_status;
    switch (trial_status) {
    case 'Recruiting':
    case 'Not yet recruiting':
    case 'Available for expanded access':
      trial_status_class = 'alert-success';
      break;
    case 'Completed':
    case 'Active, not recruiting':
      trial_status_class = 'alert-danger';
      break;
    }

    this.trial_status = trial_status;
    this.trial_status_class = trial_status_class;
  }

  angular.module('haukka.trials')
    .controller('TrialDetailController', ['$stateParams', 'trial', TrialDetailController]);

}());