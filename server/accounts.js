import { ServiceConfiguration } from 'meteor/service-configuration';
ServiceConfiguration.configurations.remove({
    service: 'facebook'
});
ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: "1381604121917514",
  	secret: "92bac02c5aca747eca79e62234da7191"
});
ServiceConfiguration.configurations.remove({
    service: 'twitter'
});
ServiceConfiguration.configurations.insert({
    service: "twitter",
    consumekey: "Y9ORmXQkayuE2L6EBuHb6bEv9",
  	secret: "CsYFnFdVs4hz65rav7SB885uy3JlOH0WhdpIl04qg6xdBlfYtM"
});